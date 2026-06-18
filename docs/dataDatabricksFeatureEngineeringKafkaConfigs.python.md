# `dataDatabricksFeatureEngineeringKafkaConfigs` Submodule <a name="`dataDatabricksFeatureEngineeringKafkaConfigs` Submodule" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksFeatureEngineeringKafkaConfigs <a name="DataDatabricksFeatureEngineeringKafkaConfigs" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs databricks_feature_engineering_kafka_configs}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs(
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
  provider_config: DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#page_size DataDatabricksFeatureEngineeringKafkaConfigs#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#provider_config DataDatabricksFeatureEngineeringKafkaConfigs#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#page_size DataDatabricksFeatureEngineeringKafkaConfigs#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#provider_config DataDatabricksFeatureEngineeringKafkaConfigs#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#workspace_id DataDatabricksFeatureEngineeringKafkaConfigs#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksFeatureEngineeringKafkaConfigs resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksFeatureEngineeringKafkaConfigs resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksFeatureEngineeringKafkaConfigs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksFeatureEngineeringKafkaConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksFeatureEngineeringKafkaConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.kafkaConfigs">kafka_configs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `kafka_configs`<sup>Required</sup> <a name="kafka_configs" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.kafkaConfigs"></a>

```python
kafka_configs: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.providerConfig"></a>

```python
provider_config: DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig</a>

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksFeatureEngineeringKafkaConfigsConfig <a name="DataDatabricksFeatureEngineeringKafkaConfigsConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#page_size DataDatabricksFeatureEngineeringKafkaConfigs#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#provider_config DataDatabricksFeatureEngineeringKafkaConfigs#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#page_size DataDatabricksFeatureEngineeringKafkaConfigs#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#provider_config DataDatabricksFeatureEngineeringKafkaConfigs#provider_config}.

---

### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs(
  name: str,
  provider_config: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#name DataDatabricksFeatureEngineeringKafkaConfigs#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#provider_config DataDatabricksFeatureEngineeringKafkaConfigs#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#name DataDatabricksFeatureEngineeringKafkaConfigs#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs.property.providerConfig"></a>

```python
provider_config: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#provider_config DataDatabricksFeatureEngineeringKafkaConfigs#provider_config}.

---

### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig(
  mtls_config: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig = None,
  uc_service_credential_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig.property.mtlsConfig">mtls_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#mtls_config DataDatabricksFeatureEngineeringKafkaConfigs#mtls_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig.property.ucServiceCredentialName">uc_service_credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#uc_service_credential_name DataDatabricksFeatureEngineeringKafkaConfigs#uc_service_credential_name}. |

---

##### `mtls_config`<sup>Optional</sup> <a name="mtls_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig.property.mtlsConfig"></a>

```python
mtls_config: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#mtls_config DataDatabricksFeatureEngineeringKafkaConfigs#mtls_config}.

---

##### `uc_service_credential_name`<sup>Optional</sup> <a name="uc_service_credential_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig.property.ucServiceCredentialName"></a>

```python
uc_service_credential_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#uc_service_credential_name DataDatabricksFeatureEngineeringKafkaConfigs#uc_service_credential_name}.

---

### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig(
  key_password_ref: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef,
  keystore_location: str,
  keystore_password_ref: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef,
  truststore_location: str,
  truststore_password_ref: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef,
  disable_hostname_verification: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig.property.keyPasswordRef">key_password_ref</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#key_password_ref DataDatabricksFeatureEngineeringKafkaConfigs#key_password_ref}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig.property.keystoreLocation">keystore_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#keystore_location DataDatabricksFeatureEngineeringKafkaConfigs#keystore_location}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig.property.keystorePasswordRef">keystore_password_ref</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#keystore_password_ref DataDatabricksFeatureEngineeringKafkaConfigs#keystore_password_ref}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig.property.truststoreLocation">truststore_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#truststore_location DataDatabricksFeatureEngineeringKafkaConfigs#truststore_location}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig.property.truststorePasswordRef">truststore_password_ref</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#truststore_password_ref DataDatabricksFeatureEngineeringKafkaConfigs#truststore_password_ref}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig.property.disableHostnameVerification">disable_hostname_verification</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#disable_hostname_verification DataDatabricksFeatureEngineeringKafkaConfigs#disable_hostname_verification}. |

---

##### `key_password_ref`<sup>Required</sup> <a name="key_password_ref" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig.property.keyPasswordRef"></a>

```python
key_password_ref: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#key_password_ref DataDatabricksFeatureEngineeringKafkaConfigs#key_password_ref}.

---

##### `keystore_location`<sup>Required</sup> <a name="keystore_location" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig.property.keystoreLocation"></a>

```python
keystore_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#keystore_location DataDatabricksFeatureEngineeringKafkaConfigs#keystore_location}.

---

##### `keystore_password_ref`<sup>Required</sup> <a name="keystore_password_ref" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig.property.keystorePasswordRef"></a>

```python
keystore_password_ref: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#keystore_password_ref DataDatabricksFeatureEngineeringKafkaConfigs#keystore_password_ref}.

---

##### `truststore_location`<sup>Required</sup> <a name="truststore_location" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig.property.truststoreLocation"></a>

```python
truststore_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#truststore_location DataDatabricksFeatureEngineeringKafkaConfigs#truststore_location}.

---

##### `truststore_password_ref`<sup>Required</sup> <a name="truststore_password_ref" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig.property.truststorePasswordRef"></a>

```python
truststore_password_ref: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#truststore_password_ref DataDatabricksFeatureEngineeringKafkaConfigs#truststore_password_ref}.

---

##### `disable_hostname_verification`<sup>Optional</sup> <a name="disable_hostname_verification" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig.property.disableHostnameVerification"></a>

```python
disable_hostname_verification: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#disable_hostname_verification DataDatabricksFeatureEngineeringKafkaConfigs#disable_hostname_verification}.

---

### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef(
  key: str,
  scope: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#key DataDatabricksFeatureEngineeringKafkaConfigs#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#scope DataDatabricksFeatureEngineeringKafkaConfigs#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#key DataDatabricksFeatureEngineeringKafkaConfigs#key}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#scope DataDatabricksFeatureEngineeringKafkaConfigs#scope}.

---

### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef(
  key: str,
  scope: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#key DataDatabricksFeatureEngineeringKafkaConfigs#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#scope DataDatabricksFeatureEngineeringKafkaConfigs#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#key DataDatabricksFeatureEngineeringKafkaConfigs#key}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#scope DataDatabricksFeatureEngineeringKafkaConfigs#scope}.

---

### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef(
  key: str,
  scope: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#key DataDatabricksFeatureEngineeringKafkaConfigs#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#scope DataDatabricksFeatureEngineeringKafkaConfigs#scope}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#key DataDatabricksFeatureEngineeringKafkaConfigs#key}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#scope DataDatabricksFeatureEngineeringKafkaConfigs#scope}.

---

### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource(
  delta_table_name: str = None,
  delta_table_source: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource.property.deltaTableName">delta_table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#delta_table_name DataDatabricksFeatureEngineeringKafkaConfigs#delta_table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource.property.deltaTableSource">delta_table_source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#delta_table_source DataDatabricksFeatureEngineeringKafkaConfigs#delta_table_source}. |

---

##### `delta_table_name`<sup>Optional</sup> <a name="delta_table_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource.property.deltaTableName"></a>

```python
delta_table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#delta_table_name DataDatabricksFeatureEngineeringKafkaConfigs#delta_table_name}.

---

##### `delta_table_source`<sup>Optional</sup> <a name="delta_table_source" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource.property.deltaTableSource"></a>

```python
delta_table_source: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#delta_table_source DataDatabricksFeatureEngineeringKafkaConfigs#delta_table_source}.

---

### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource(
  full_name: str,
  dataframe_schema: str = None,
  entity_columns: typing.List[str] = None,
  filter_condition: str = None,
  timeseries_column: str = None,
  transformation_sql: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource.property.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#full_name DataDatabricksFeatureEngineeringKafkaConfigs#full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource.property.dataframeSchema">dataframe_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#dataframe_schema DataDatabricksFeatureEngineeringKafkaConfigs#dataframe_schema}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource.property.entityColumns">entity_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#entity_columns DataDatabricksFeatureEngineeringKafkaConfigs#entity_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource.property.filterCondition">filter_condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#filter_condition DataDatabricksFeatureEngineeringKafkaConfigs#filter_condition}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource.property.timeseriesColumn">timeseries_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#timeseries_column DataDatabricksFeatureEngineeringKafkaConfigs#timeseries_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource.property.transformationSql">transformation_sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#transformation_sql DataDatabricksFeatureEngineeringKafkaConfigs#transformation_sql}. |

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#full_name DataDatabricksFeatureEngineeringKafkaConfigs#full_name}.

---

##### `dataframe_schema`<sup>Optional</sup> <a name="dataframe_schema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource.property.dataframeSchema"></a>

```python
dataframe_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#dataframe_schema DataDatabricksFeatureEngineeringKafkaConfigs#dataframe_schema}.

---

##### `entity_columns`<sup>Optional</sup> <a name="entity_columns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource.property.entityColumns"></a>

```python
entity_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#entity_columns DataDatabricksFeatureEngineeringKafkaConfigs#entity_columns}.

---

##### `filter_condition`<sup>Optional</sup> <a name="filter_condition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource.property.filterCondition"></a>

```python
filter_condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#filter_condition DataDatabricksFeatureEngineeringKafkaConfigs#filter_condition}.

---

##### `timeseries_column`<sup>Optional</sup> <a name="timeseries_column" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource.property.timeseriesColumn"></a>

```python
timeseries_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#timeseries_column DataDatabricksFeatureEngineeringKafkaConfigs#timeseries_column}.

---

##### `transformation_sql`<sup>Optional</sup> <a name="transformation_sql" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource.property.transformationSql"></a>

```python
transformation_sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#transformation_sql DataDatabricksFeatureEngineeringKafkaConfigs#transformation_sql}.

---

### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig(
  ingestion_destination: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination,
  backfill_source: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource = None,
  deduplication_columns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig.property.ingestionDestination">ingestion_destination</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#ingestion_destination DataDatabricksFeatureEngineeringKafkaConfigs#ingestion_destination}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig.property.backfillSource">backfill_source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#backfill_source DataDatabricksFeatureEngineeringKafkaConfigs#backfill_source}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig.property.deduplicationColumns">deduplication_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#deduplication_columns DataDatabricksFeatureEngineeringKafkaConfigs#deduplication_columns}. |

---

##### `ingestion_destination`<sup>Required</sup> <a name="ingestion_destination" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig.property.ingestionDestination"></a>

```python
ingestion_destination: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#ingestion_destination DataDatabricksFeatureEngineeringKafkaConfigs#ingestion_destination}.

---

##### `backfill_source`<sup>Optional</sup> <a name="backfill_source" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig.property.backfillSource"></a>

```python
backfill_source: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#backfill_source DataDatabricksFeatureEngineeringKafkaConfigs#backfill_source}.

---

##### `deduplication_columns`<sup>Optional</sup> <a name="deduplication_columns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig.property.deduplicationColumns"></a>

```python
deduplication_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#deduplication_columns DataDatabricksFeatureEngineeringKafkaConfigs#deduplication_columns}.

---

### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource(
  delta_table_name: str = None,
  delta_table_source: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource.property.deltaTableName">delta_table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#delta_table_name DataDatabricksFeatureEngineeringKafkaConfigs#delta_table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource.property.deltaTableSource">delta_table_source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#delta_table_source DataDatabricksFeatureEngineeringKafkaConfigs#delta_table_source}. |

---

##### `delta_table_name`<sup>Optional</sup> <a name="delta_table_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource.property.deltaTableName"></a>

```python
delta_table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#delta_table_name DataDatabricksFeatureEngineeringKafkaConfigs#delta_table_name}.

---

##### `delta_table_source`<sup>Optional</sup> <a name="delta_table_source" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource.property.deltaTableSource"></a>

```python
delta_table_source: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#delta_table_source DataDatabricksFeatureEngineeringKafkaConfigs#delta_table_source}.

---

### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource(
  full_name: str,
  dataframe_schema: str = None,
  entity_columns: typing.List[str] = None,
  filter_condition: str = None,
  timeseries_column: str = None,
  transformation_sql: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource.property.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#full_name DataDatabricksFeatureEngineeringKafkaConfigs#full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource.property.dataframeSchema">dataframe_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#dataframe_schema DataDatabricksFeatureEngineeringKafkaConfigs#dataframe_schema}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource.property.entityColumns">entity_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#entity_columns DataDatabricksFeatureEngineeringKafkaConfigs#entity_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource.property.filterCondition">filter_condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#filter_condition DataDatabricksFeatureEngineeringKafkaConfigs#filter_condition}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource.property.timeseriesColumn">timeseries_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#timeseries_column DataDatabricksFeatureEngineeringKafkaConfigs#timeseries_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource.property.transformationSql">transformation_sql</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#transformation_sql DataDatabricksFeatureEngineeringKafkaConfigs#transformation_sql}. |

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#full_name DataDatabricksFeatureEngineeringKafkaConfigs#full_name}.

---

##### `dataframe_schema`<sup>Optional</sup> <a name="dataframe_schema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource.property.dataframeSchema"></a>

```python
dataframe_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#dataframe_schema DataDatabricksFeatureEngineeringKafkaConfigs#dataframe_schema}.

---

##### `entity_columns`<sup>Optional</sup> <a name="entity_columns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource.property.entityColumns"></a>

```python
entity_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#entity_columns DataDatabricksFeatureEngineeringKafkaConfigs#entity_columns}.

---

##### `filter_condition`<sup>Optional</sup> <a name="filter_condition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource.property.filterCondition"></a>

```python
filter_condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#filter_condition DataDatabricksFeatureEngineeringKafkaConfigs#filter_condition}.

---

##### `timeseries_column`<sup>Optional</sup> <a name="timeseries_column" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource.property.timeseriesColumn"></a>

```python
timeseries_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#timeseries_column DataDatabricksFeatureEngineeringKafkaConfigs#timeseries_column}.

---

##### `transformation_sql`<sup>Optional</sup> <a name="transformation_sql" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource.property.transformationSql"></a>

```python
transformation_sql: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#transformation_sql DataDatabricksFeatureEngineeringKafkaConfigs#transformation_sql}.

---

### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination(
  delta_table_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination.property.deltaTableName">delta_table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#delta_table_name DataDatabricksFeatureEngineeringKafkaConfigs#delta_table_name}. |

---

##### `delta_table_name`<sup>Optional</sup> <a name="delta_table_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination.property.deltaTableName"></a>

```python
delta_table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#delta_table_name DataDatabricksFeatureEngineeringKafkaConfigs#delta_table_name}.

---

### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema(
  json_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema.property.jsonSchema">json_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#json_schema DataDatabricksFeatureEngineeringKafkaConfigs#json_schema}. |

---

##### `json_schema`<sup>Optional</sup> <a name="json_schema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema.property.jsonSchema"></a>

```python
json_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#json_schema DataDatabricksFeatureEngineeringKafkaConfigs#json_schema}.

---

### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#workspace_id DataDatabricksFeatureEngineeringKafkaConfigs#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#workspace_id DataDatabricksFeatureEngineeringKafkaConfigs#workspace_id}.

---

### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode(
  assign: str = None,
  subscribe: str = None,
  subscribe_pattern: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode.property.assign">assign</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#assign DataDatabricksFeatureEngineeringKafkaConfigs#assign}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode.property.subscribe">subscribe</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#subscribe DataDatabricksFeatureEngineeringKafkaConfigs#subscribe}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode.property.subscribePattern">subscribe_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#subscribe_pattern DataDatabricksFeatureEngineeringKafkaConfigs#subscribe_pattern}. |

---

##### `assign`<sup>Optional</sup> <a name="assign" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode.property.assign"></a>

```python
assign: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#assign DataDatabricksFeatureEngineeringKafkaConfigs#assign}.

---

##### `subscribe`<sup>Optional</sup> <a name="subscribe" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode.property.subscribe"></a>

```python
subscribe: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#subscribe DataDatabricksFeatureEngineeringKafkaConfigs#subscribe}.

---

##### `subscribe_pattern`<sup>Optional</sup> <a name="subscribe_pattern" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode.property.subscribePattern"></a>

```python
subscribe_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#subscribe_pattern DataDatabricksFeatureEngineeringKafkaConfigs#subscribe_pattern}.

---

### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema(
  json_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema.property.jsonSchema">json_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#json_schema DataDatabricksFeatureEngineeringKafkaConfigs#json_schema}. |

---

##### `json_schema`<sup>Optional</sup> <a name="json_schema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema.property.jsonSchema"></a>

```python
json_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#json_schema DataDatabricksFeatureEngineeringKafkaConfigs#json_schema}.

---

### DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig <a name="DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#workspace_id DataDatabricksFeatureEngineeringKafkaConfigs#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#workspace_id DataDatabricksFeatureEngineeringKafkaConfigs#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.putKeyPasswordRef">put_key_password_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.putKeystorePasswordRef">put_keystore_password_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.putTruststorePasswordRef">put_truststore_password_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.resetDisableHostnameVerification">reset_disable_hostname_verification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_key_password_ref` <a name="put_key_password_ref" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.putKeyPasswordRef"></a>

```python
def put_key_password_ref(
  key: str,
  scope: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.putKeyPasswordRef.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#key DataDatabricksFeatureEngineeringKafkaConfigs#key}.

---

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.putKeyPasswordRef.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#scope DataDatabricksFeatureEngineeringKafkaConfigs#scope}.

---

##### `put_keystore_password_ref` <a name="put_keystore_password_ref" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.putKeystorePasswordRef"></a>

```python
def put_keystore_password_ref(
  key: str,
  scope: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.putKeystorePasswordRef.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#key DataDatabricksFeatureEngineeringKafkaConfigs#key}.

---

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.putKeystorePasswordRef.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#scope DataDatabricksFeatureEngineeringKafkaConfigs#scope}.

---

##### `put_truststore_password_ref` <a name="put_truststore_password_ref" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.putTruststorePasswordRef"></a>

```python
def put_truststore_password_ref(
  key: str,
  scope: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.putTruststorePasswordRef.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#key DataDatabricksFeatureEngineeringKafkaConfigs#key}.

---

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.putTruststorePasswordRef.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#scope DataDatabricksFeatureEngineeringKafkaConfigs#scope}.

---

##### `reset_disable_hostname_verification` <a name="reset_disable_hostname_verification" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.resetDisableHostnameVerification"></a>

```python
def reset_disable_hostname_verification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.keyPasswordRef">key_password_ref</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.keystorePasswordRef">keystore_password_ref</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.truststorePasswordRef">truststore_password_ref</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.disableHostnameVerificationInput">disable_hostname_verification_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.keyPasswordRefInput">key_password_ref_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.keystoreLocationInput">keystore_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.keystorePasswordRefInput">keystore_password_ref_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.truststoreLocationInput">truststore_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.truststorePasswordRefInput">truststore_password_ref_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.disableHostnameVerification">disable_hostname_verification</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.keystoreLocation">keystore_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.truststoreLocation">truststore_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_password_ref`<sup>Required</sup> <a name="key_password_ref" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.keyPasswordRef"></a>

```python
key_password_ref: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRefOutputReference</a>

---

##### `keystore_password_ref`<sup>Required</sup> <a name="keystore_password_ref" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.keystorePasswordRef"></a>

```python
keystore_password_ref: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRefOutputReference</a>

---

##### `truststore_password_ref`<sup>Required</sup> <a name="truststore_password_ref" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.truststorePasswordRef"></a>

```python
truststore_password_ref: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference</a>

---

##### `disable_hostname_verification_input`<sup>Optional</sup> <a name="disable_hostname_verification_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.disableHostnameVerificationInput"></a>

```python
disable_hostname_verification_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_password_ref_input`<sup>Optional</sup> <a name="key_password_ref_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.keyPasswordRefInput"></a>

```python
key_password_ref_input: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef</a>

---

##### `keystore_location_input`<sup>Optional</sup> <a name="keystore_location_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.keystoreLocationInput"></a>

```python
keystore_location_input: str
```

- *Type:* str

---

##### `keystore_password_ref_input`<sup>Optional</sup> <a name="keystore_password_ref_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.keystorePasswordRefInput"></a>

```python
keystore_password_ref_input: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef</a>

---

##### `truststore_location_input`<sup>Optional</sup> <a name="truststore_location_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.truststoreLocationInput"></a>

```python
truststore_location_input: str
```

- *Type:* str

---

##### `truststore_password_ref_input`<sup>Optional</sup> <a name="truststore_password_ref_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.truststorePasswordRefInput"></a>

```python
truststore_password_ref_input: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef</a>

---

##### `disable_hostname_verification`<sup>Required</sup> <a name="disable_hostname_verification" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.disableHostnameVerification"></a>

```python
disable_hostname_verification: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `keystore_location`<sup>Required</sup> <a name="keystore_location" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.keystoreLocation"></a>

```python
keystore_location: str
```

- *Type:* str

---

##### `truststore_location`<sup>Required</sup> <a name="truststore_location" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.truststoreLocation"></a>

```python
truststore_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRefOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.putMtlsConfig">put_mtls_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.resetMtlsConfig">reset_mtls_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.resetUcServiceCredentialName">reset_uc_service_credential_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mtls_config` <a name="put_mtls_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.putMtlsConfig"></a>

```python
def put_mtls_config(
  key_password_ref: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef,
  keystore_location: str,
  keystore_password_ref: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef,
  truststore_location: str,
  truststore_password_ref: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef,
  disable_hostname_verification: bool | IResolvable = None
) -> None
```

###### `key_password_ref`<sup>Required</sup> <a name="key_password_ref" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.putMtlsConfig.parameter.keyPasswordRef"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeyPasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#key_password_ref DataDatabricksFeatureEngineeringKafkaConfigs#key_password_ref}.

---

###### `keystore_location`<sup>Required</sup> <a name="keystore_location" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.putMtlsConfig.parameter.keystoreLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#keystore_location DataDatabricksFeatureEngineeringKafkaConfigs#keystore_location}.

---

###### `keystore_password_ref`<sup>Required</sup> <a name="keystore_password_ref" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.putMtlsConfig.parameter.keystorePasswordRef"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigKeystorePasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#keystore_password_ref DataDatabricksFeatureEngineeringKafkaConfigs#keystore_password_ref}.

---

###### `truststore_location`<sup>Required</sup> <a name="truststore_location" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.putMtlsConfig.parameter.truststoreLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#truststore_location DataDatabricksFeatureEngineeringKafkaConfigs#truststore_location}.

---

###### `truststore_password_ref`<sup>Required</sup> <a name="truststore_password_ref" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.putMtlsConfig.parameter.truststorePasswordRef"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigTruststorePasswordRef</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#truststore_password_ref DataDatabricksFeatureEngineeringKafkaConfigs#truststore_password_ref}.

---

###### `disable_hostname_verification`<sup>Optional</sup> <a name="disable_hostname_verification" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.putMtlsConfig.parameter.disableHostnameVerification"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#disable_hostname_verification DataDatabricksFeatureEngineeringKafkaConfigs#disable_hostname_verification}.

---

##### `reset_mtls_config` <a name="reset_mtls_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.resetMtlsConfig"></a>

```python
def reset_mtls_config() -> None
```

##### `reset_uc_service_credential_name` <a name="reset_uc_service_credential_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.resetUcServiceCredentialName"></a>

```python
def reset_uc_service_credential_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.property.mtlsConfig">mtls_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.property.mtlsConfigInput">mtls_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.property.ucServiceCredentialNameInput">uc_service_credential_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.property.ucServiceCredentialName">uc_service_credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mtls_config`<sup>Required</sup> <a name="mtls_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.property.mtlsConfig"></a>

```python
mtls_config: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfigOutputReference</a>

---

##### `mtls_config_input`<sup>Optional</sup> <a name="mtls_config_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.property.mtlsConfigInput"></a>

```python
mtls_config_input: IResolvable | DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigMtlsConfig</a>

---

##### `uc_service_credential_name_input`<sup>Optional</sup> <a name="uc_service_credential_name_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.property.ucServiceCredentialNameInput"></a>

```python
uc_service_credential_name_input: str
```

- *Type:* str

---

##### `uc_service_credential_name`<sup>Required</sup> <a name="uc_service_credential_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.property.ucServiceCredentialName"></a>

```python
uc_service_credential_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfig</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema">reset_dataframe_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns">reset_entity_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition">reset_filter_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn">reset_timeseries_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql">reset_transformation_sql</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataframe_schema` <a name="reset_dataframe_schema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema"></a>

```python
def reset_dataframe_schema() -> None
```

##### `reset_entity_columns` <a name="reset_entity_columns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns"></a>

```python
def reset_entity_columns() -> None
```

##### `reset_filter_condition` <a name="reset_filter_condition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition"></a>

```python
def reset_filter_condition() -> None
```

##### `reset_timeseries_column` <a name="reset_timeseries_column" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn"></a>

```python
def reset_timeseries_column() -> None
```

##### `reset_transformation_sql` <a name="reset_transformation_sql" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql"></a>

```python
def reset_transformation_sql() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput">dataframe_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput">entity_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput">filter_condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput">timeseries_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput">transformation_sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema">dataframe_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.entityColumns">entity_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.filterCondition">filter_condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn">timeseries_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.transformationSql">transformation_sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataframe_schema_input`<sup>Optional</sup> <a name="dataframe_schema_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput"></a>

```python
dataframe_schema_input: str
```

- *Type:* str

---

##### `entity_columns_input`<sup>Optional</sup> <a name="entity_columns_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput"></a>

```python
entity_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_condition_input`<sup>Optional</sup> <a name="filter_condition_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput"></a>

```python
filter_condition_input: str
```

- *Type:* str

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `timeseries_column_input`<sup>Optional</sup> <a name="timeseries_column_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput"></a>

```python
timeseries_column_input: str
```

- *Type:* str

---

##### `transformation_sql_input`<sup>Optional</sup> <a name="transformation_sql_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput"></a>

```python
transformation_sql_input: str
```

- *Type:* str

---

##### `dataframe_schema`<sup>Required</sup> <a name="dataframe_schema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema"></a>

```python
dataframe_schema: str
```

- *Type:* str

---

##### `entity_columns`<sup>Required</sup> <a name="entity_columns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.entityColumns"></a>

```python
entity_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_condition`<sup>Required</sup> <a name="filter_condition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.filterCondition"></a>

```python
filter_condition: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `timeseries_column`<sup>Required</sup> <a name="timeseries_column" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn"></a>

```python
timeseries_column: str
```

- *Type:* str

---

##### `transformation_sql`<sup>Required</sup> <a name="transformation_sql" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.transformationSql"></a>

```python
transformation_sql: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.putDeltaTableSource">put_delta_table_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.resetDeltaTableName">reset_delta_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.resetDeltaTableSource">reset_delta_table_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_delta_table_source` <a name="put_delta_table_source" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.putDeltaTableSource"></a>

```python
def put_delta_table_source(
  full_name: str,
  dataframe_schema: str = None,
  entity_columns: typing.List[str] = None,
  filter_condition: str = None,
  timeseries_column: str = None,
  transformation_sql: str = None
) -> None
```

###### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.putDeltaTableSource.parameter.fullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#full_name DataDatabricksFeatureEngineeringKafkaConfigs#full_name}.

---

###### `dataframe_schema`<sup>Optional</sup> <a name="dataframe_schema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.putDeltaTableSource.parameter.dataframeSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#dataframe_schema DataDatabricksFeatureEngineeringKafkaConfigs#dataframe_schema}.

---

###### `entity_columns`<sup>Optional</sup> <a name="entity_columns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.putDeltaTableSource.parameter.entityColumns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#entity_columns DataDatabricksFeatureEngineeringKafkaConfigs#entity_columns}.

---

###### `filter_condition`<sup>Optional</sup> <a name="filter_condition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.putDeltaTableSource.parameter.filterCondition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#filter_condition DataDatabricksFeatureEngineeringKafkaConfigs#filter_condition}.

---

###### `timeseries_column`<sup>Optional</sup> <a name="timeseries_column" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.putDeltaTableSource.parameter.timeseriesColumn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#timeseries_column DataDatabricksFeatureEngineeringKafkaConfigs#timeseries_column}.

---

###### `transformation_sql`<sup>Optional</sup> <a name="transformation_sql" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.putDeltaTableSource.parameter.transformationSql"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#transformation_sql DataDatabricksFeatureEngineeringKafkaConfigs#transformation_sql}.

---

##### `reset_delta_table_name` <a name="reset_delta_table_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.resetDeltaTableName"></a>

```python
def reset_delta_table_name() -> None
```

##### `reset_delta_table_source` <a name="reset_delta_table_source" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.resetDeltaTableSource"></a>

```python
def reset_delta_table_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.property.deltaTableSource">delta_table_source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.property.deltaTableNameInput">delta_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.property.deltaTableSourceInput">delta_table_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.property.deltaTableName">delta_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_table_source`<sup>Required</sup> <a name="delta_table_source" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.property.deltaTableSource"></a>

```python
delta_table_source: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSourceOutputReference</a>

---

##### `delta_table_name_input`<sup>Optional</sup> <a name="delta_table_name_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.property.deltaTableNameInput"></a>

```python
delta_table_name_input: str
```

- *Type:* str

---

##### `delta_table_source_input`<sup>Optional</sup> <a name="delta_table_source_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.property.deltaTableSourceInput"></a>

```python
delta_table_source_input: IResolvable | DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceDeltaTableSource</a>

---

##### `delta_table_name`<sup>Required</sup> <a name="delta_table_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.property.deltaTableName"></a>

```python
delta_table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSource</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema">reset_dataframe_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns">reset_entity_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition">reset_filter_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn">reset_timeseries_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql">reset_transformation_sql</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataframe_schema` <a name="reset_dataframe_schema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetDataframeSchema"></a>

```python
def reset_dataframe_schema() -> None
```

##### `reset_entity_columns` <a name="reset_entity_columns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetEntityColumns"></a>

```python
def reset_entity_columns() -> None
```

##### `reset_filter_condition` <a name="reset_filter_condition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetFilterCondition"></a>

```python
def reset_filter_condition() -> None
```

##### `reset_timeseries_column` <a name="reset_timeseries_column" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetTimeseriesColumn"></a>

```python
def reset_timeseries_column() -> None
```

##### `reset_transformation_sql` <a name="reset_transformation_sql" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.resetTransformationSql"></a>

```python
def reset_transformation_sql() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput">dataframe_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput">entity_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput">filter_condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput">timeseries_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput">transformation_sql_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema">dataframe_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns">entity_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition">filter_condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn">timeseries_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql">transformation_sql</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataframe_schema_input`<sup>Optional</sup> <a name="dataframe_schema_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchemaInput"></a>

```python
dataframe_schema_input: str
```

- *Type:* str

---

##### `entity_columns_input`<sup>Optional</sup> <a name="entity_columns_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumnsInput"></a>

```python
entity_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_condition_input`<sup>Optional</sup> <a name="filter_condition_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.filterConditionInput"></a>

```python
filter_condition_input: str
```

- *Type:* str

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `timeseries_column_input`<sup>Optional</sup> <a name="timeseries_column_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput"></a>

```python
timeseries_column_input: str
```

- *Type:* str

---

##### `transformation_sql_input`<sup>Optional</sup> <a name="transformation_sql_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSqlInput"></a>

```python
transformation_sql_input: str
```

- *Type:* str

---

##### `dataframe_schema`<sup>Required</sup> <a name="dataframe_schema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.dataframeSchema"></a>

```python
dataframe_schema: str
```

- *Type:* str

---

##### `entity_columns`<sup>Required</sup> <a name="entity_columns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.entityColumns"></a>

```python
entity_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_condition`<sup>Required</sup> <a name="filter_condition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.filterCondition"></a>

```python
filter_condition: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `timeseries_column`<sup>Required</sup> <a name="timeseries_column" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.timeseriesColumn"></a>

```python
timeseries_column: str
```

- *Type:* str

---

##### `transformation_sql`<sup>Required</sup> <a name="transformation_sql" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.transformationSql"></a>

```python
transformation_sql: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.putDeltaTableSource">put_delta_table_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.resetDeltaTableName">reset_delta_table_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.resetDeltaTableSource">reset_delta_table_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_delta_table_source` <a name="put_delta_table_source" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.putDeltaTableSource"></a>

```python
def put_delta_table_source(
  full_name: str,
  dataframe_schema: str = None,
  entity_columns: typing.List[str] = None,
  filter_condition: str = None,
  timeseries_column: str = None,
  transformation_sql: str = None
) -> None
```

###### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.fullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#full_name DataDatabricksFeatureEngineeringKafkaConfigs#full_name}.

---

###### `dataframe_schema`<sup>Optional</sup> <a name="dataframe_schema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.dataframeSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#dataframe_schema DataDatabricksFeatureEngineeringKafkaConfigs#dataframe_schema}.

---

###### `entity_columns`<sup>Optional</sup> <a name="entity_columns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.entityColumns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#entity_columns DataDatabricksFeatureEngineeringKafkaConfigs#entity_columns}.

---

###### `filter_condition`<sup>Optional</sup> <a name="filter_condition" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.filterCondition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#filter_condition DataDatabricksFeatureEngineeringKafkaConfigs#filter_condition}.

---

###### `timeseries_column`<sup>Optional</sup> <a name="timeseries_column" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.timeseriesColumn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#timeseries_column DataDatabricksFeatureEngineeringKafkaConfigs#timeseries_column}.

---

###### `transformation_sql`<sup>Optional</sup> <a name="transformation_sql" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.putDeltaTableSource.parameter.transformationSql"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#transformation_sql DataDatabricksFeatureEngineeringKafkaConfigs#transformation_sql}.

---

##### `reset_delta_table_name` <a name="reset_delta_table_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.resetDeltaTableName"></a>

```python
def reset_delta_table_name() -> None
```

##### `reset_delta_table_source` <a name="reset_delta_table_source" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.resetDeltaTableSource"></a>

```python
def reset_delta_table_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.property.deltaTableSource">delta_table_source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.property.deltaTableNameInput">delta_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.property.deltaTableSourceInput">delta_table_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.property.deltaTableName">delta_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_table_source`<sup>Required</sup> <a name="delta_table_source" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.property.deltaTableSource"></a>

```python
delta_table_source: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSourceOutputReference</a>

---

##### `delta_table_name_input`<sup>Optional</sup> <a name="delta_table_name_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.property.deltaTableNameInput"></a>

```python
delta_table_name_input: str
```

- *Type:* str

---

##### `delta_table_source_input`<sup>Optional</sup> <a name="delta_table_source_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.property.deltaTableSourceInput"></a>

```python
delta_table_source_input: IResolvable | DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource</a>

---

##### `delta_table_name`<sup>Required</sup> <a name="delta_table_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.property.deltaTableName"></a>

```python
delta_table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.resetDeltaTableName">reset_delta_table_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delta_table_name` <a name="reset_delta_table_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.resetDeltaTableName"></a>

```python
def reset_delta_table_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.property.deltaTableNameInput">delta_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.property.deltaTableName">delta_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delta_table_name_input`<sup>Optional</sup> <a name="delta_table_name_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.property.deltaTableNameInput"></a>

```python
delta_table_name_input: str
```

- *Type:* str

---

##### `delta_table_name`<sup>Required</sup> <a name="delta_table_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.property.deltaTableName"></a>

```python
delta_table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.putBackfillSource">put_backfill_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.putIngestionDestination">put_ingestion_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.resetBackfillSource">reset_backfill_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.resetDeduplicationColumns">reset_deduplication_columns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backfill_source` <a name="put_backfill_source" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.putBackfillSource"></a>

```python
def put_backfill_source(
  delta_table_name: str = None,
  delta_table_source: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource = None
) -> None
```

###### `delta_table_name`<sup>Optional</sup> <a name="delta_table_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.putBackfillSource.parameter.deltaTableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#delta_table_name DataDatabricksFeatureEngineeringKafkaConfigs#delta_table_name}.

---

###### `delta_table_source`<sup>Optional</sup> <a name="delta_table_source" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.putBackfillSource.parameter.deltaTableSource"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#delta_table_source DataDatabricksFeatureEngineeringKafkaConfigs#delta_table_source}.

---

##### `put_ingestion_destination` <a name="put_ingestion_destination" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.putIngestionDestination"></a>

```python
def put_ingestion_destination(
  delta_table_name: str = None
) -> None
```

###### `delta_table_name`<sup>Optional</sup> <a name="delta_table_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.putIngestionDestination.parameter.deltaTableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#delta_table_name DataDatabricksFeatureEngineeringKafkaConfigs#delta_table_name}.

---

##### `reset_backfill_source` <a name="reset_backfill_source" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.resetBackfillSource"></a>

```python
def reset_backfill_source() -> None
```

##### `reset_deduplication_columns` <a name="reset_deduplication_columns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.resetDeduplicationColumns"></a>

```python
def reset_deduplication_columns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.backfillJobId">backfill_job_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.backfillSource">backfill_source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.ingestionDestination">ingestion_destination</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.ingestionJobId">ingestion_job_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.ingestionPipelineId">ingestion_pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.backfillSourceInput">backfill_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.deduplicationColumnsInput">deduplication_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.ingestionDestinationInput">ingestion_destination_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.deduplicationColumns">deduplication_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backfill_job_id`<sup>Required</sup> <a name="backfill_job_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.backfillJobId"></a>

```python
backfill_job_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backfill_source`<sup>Required</sup> <a name="backfill_source" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.backfillSource"></a>

```python
backfill_source: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSourceOutputReference</a>

---

##### `ingestion_destination`<sup>Required</sup> <a name="ingestion_destination" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.ingestionDestination"></a>

```python
ingestion_destination: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestinationOutputReference</a>

---

##### `ingestion_job_id`<sup>Required</sup> <a name="ingestion_job_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.ingestionJobId"></a>

```python
ingestion_job_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ingestion_pipeline_id`<sup>Required</sup> <a name="ingestion_pipeline_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.ingestionPipelineId"></a>

```python
ingestion_pipeline_id: str
```

- *Type:* str

---

##### `backfill_source_input`<sup>Optional</sup> <a name="backfill_source_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.backfillSourceInput"></a>

```python
backfill_source_input: IResolvable | DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigBackfillSource</a>

---

##### `deduplication_columns_input`<sup>Optional</sup> <a name="deduplication_columns_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.deduplicationColumnsInput"></a>

```python
deduplication_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ingestion_destination_input`<sup>Optional</sup> <a name="ingestion_destination_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.ingestionDestinationInput"></a>

```python
ingestion_destination_input: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigIngestionDestination</a>

---

##### `deduplication_columns`<sup>Required</sup> <a name="deduplication_columns" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.deduplicationColumns"></a>

```python
deduplication_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfig</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.resetJsonSchema">reset_json_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_json_schema` <a name="reset_json_schema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.resetJsonSchema"></a>

```python
def reset_json_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.property.jsonSchemaInput">json_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.property.jsonSchema">json_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_schema_input`<sup>Optional</sup> <a name="json_schema_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.property.jsonSchemaInput"></a>

```python
json_schema_input: str
```

- *Type:* str

---

##### `json_schema`<sup>Required</sup> <a name="json_schema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.property.jsonSchema"></a>

```python
json_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchema</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs</a>]

---


### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/data-sources/feature_engineering_kafka_configs#workspace_id DataDatabricksFeatureEngineeringKafkaConfigs#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.authConfig">auth_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.backfillSource">backfill_source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.bootstrapServers">bootstrap_servers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.extraOptions">extra_options</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.ingestionConfig">ingestion_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.keySchema">key_schema</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.subscriptionMode">subscription_mode</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.valueSchema">value_schema</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_config`<sup>Required</sup> <a name="auth_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.authConfig"></a>

```python
auth_config: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsAuthConfigOutputReference</a>

---

##### `backfill_source`<sup>Required</sup> <a name="backfill_source" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.backfillSource"></a>

```python
backfill_source: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsBackfillSourceOutputReference</a>

---

##### `bootstrap_servers`<sup>Required</sup> <a name="bootstrap_servers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.bootstrapServers"></a>

```python
bootstrap_servers: str
```

- *Type:* str

---

##### `extra_options`<sup>Required</sup> <a name="extra_options" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.extraOptions"></a>

```python
extra_options: StringMap
```

- *Type:* cdktn.StringMap

---

##### `ingestion_config`<sup>Required</sup> <a name="ingestion_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.ingestionConfig"></a>

```python
ingestion_config: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsIngestionConfigOutputReference</a>

---

##### `key_schema`<sup>Required</sup> <a name="key_schema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.keySchema"></a>

```python
key_schema: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsKeySchemaOutputReference</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference</a>

---

##### `subscription_mode`<sup>Required</sup> <a name="subscription_mode" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.subscriptionMode"></a>

```python
subscription_mode: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference</a>

---

##### `value_schema`<sup>Required</sup> <a name="value_schema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.valueSchema"></a>

```python
value_schema: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigs</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsProviderConfig</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.resetAssign">reset_assign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.resetSubscribe">reset_subscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.resetSubscribePattern">reset_subscribe_pattern</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_assign` <a name="reset_assign" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.resetAssign"></a>

```python
def reset_assign() -> None
```

##### `reset_subscribe` <a name="reset_subscribe" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.resetSubscribe"></a>

```python
def reset_subscribe() -> None
```

##### `reset_subscribe_pattern` <a name="reset_subscribe_pattern" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.resetSubscribePattern"></a>

```python
def reset_subscribe_pattern() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.property.assignInput">assign_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.property.subscribeInput">subscribe_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.property.subscribePatternInput">subscribe_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.property.assign">assign</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.property.subscribe">subscribe</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.property.subscribePattern">subscribe_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assign_input`<sup>Optional</sup> <a name="assign_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.property.assignInput"></a>

```python
assign_input: str
```

- *Type:* str

---

##### `subscribe_input`<sup>Optional</sup> <a name="subscribe_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.property.subscribeInput"></a>

```python
subscribe_input: str
```

- *Type:* str

---

##### `subscribe_pattern_input`<sup>Optional</sup> <a name="subscribe_pattern_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.property.subscribePatternInput"></a>

```python
subscribe_pattern_input: str
```

- *Type:* str

---

##### `assign`<sup>Required</sup> <a name="assign" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.property.assign"></a>

```python
assign: str
```

- *Type:* str

---

##### `subscribe`<sup>Required</sup> <a name="subscribe" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.property.subscribe"></a>

```python
subscribe: str
```

- *Type:* str

---

##### `subscribe_pattern`<sup>Required</sup> <a name="subscribe_pattern" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.property.subscribePattern"></a>

```python
subscribe_pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionModeOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsSubscriptionMode</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.resetJsonSchema">reset_json_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_json_schema` <a name="reset_json_schema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.resetJsonSchema"></a>

```python
def reset_json_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.property.jsonSchemaInput">json_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.property.jsonSchema">json_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_schema_input`<sup>Optional</sup> <a name="json_schema_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.property.jsonSchemaInput"></a>

```python
json_schema_input: str
```

- *Type:* str

---

##### `json_schema`<sup>Required</sup> <a name="json_schema" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.property.jsonSchema"></a>

```python
json_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchemaOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema">DataDatabricksFeatureEngineeringKafkaConfigsKafkaConfigsValueSchema</a>

---


### DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference <a name="DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_kafka_configs

dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringKafkaConfigs.DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig">DataDatabricksFeatureEngineeringKafkaConfigsProviderConfig</a>

---



