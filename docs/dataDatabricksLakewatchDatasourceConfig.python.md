# `dataDatabricksLakewatchDatasourceConfig` Submodule <a name="`dataDatabricksLakewatchDatasourceConfig` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchDatasourceConfigA <a name="DataDatabricksLakewatchDatasourceConfigA" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config databricks_lakewatch_datasource_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource_config

dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksLakewatchDatasourceConfigProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#name DataDatabricksLakewatchDatasourceConfigA#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig">DataDatabricksLakewatchDatasourceConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#provider_config DataDatabricksLakewatchDatasourceConfigA#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#name DataDatabricksLakewatchDatasourceConfigA#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig">DataDatabricksLakewatchDatasourceConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#provider_config DataDatabricksLakewatchDatasourceConfigA#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#workspace_id DataDatabricksLakewatchDatasourceConfigA#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchDatasourceConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource_config

dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource_config

dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource_config

dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource_config

dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksLakewatchDatasourceConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksLakewatchDatasourceConfigA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksLakewatchDatasourceConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchDatasourceConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.defaultComputeMode">default_compute_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.defaultFolder">default_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.effectiveDefaultFolder">effective_default_folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference">DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.updatedBy">updated_by</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference">DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig">DataDatabricksLakewatchDatasourceConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `default_compute_mode`<sup>Required</sup> <a name="default_compute_mode" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.defaultComputeMode"></a>

```python
default_compute_mode: str
```

- *Type:* str

---

##### `default_folder`<sup>Required</sup> <a name="default_folder" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.defaultFolder"></a>

```python
default_folder: str
```

- *Type:* str

---

##### `effective_default_folder`<sup>Required</sup> <a name="effective_default_folder" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.effectiveDefaultFolder"></a>

```python
effective_default_folder: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference">DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference</a>

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.updatedBy"></a>

```python
updated_by: DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference">DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksLakewatchDatasourceConfigProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig">DataDatabricksLakewatchDatasourceConfigProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchDatasourceConfigAConfig <a name="DataDatabricksLakewatchDatasourceConfigAConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource_config

dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksLakewatchDatasourceConfigProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#name DataDatabricksLakewatchDatasourceConfigA#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig">DataDatabricksLakewatchDatasourceConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#provider_config DataDatabricksLakewatchDatasourceConfigA#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#name DataDatabricksLakewatchDatasourceConfigA#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigAConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchDatasourceConfigProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig">DataDatabricksLakewatchDatasourceConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#provider_config DataDatabricksLakewatchDatasourceConfigA#provider_config}.

---

### DataDatabricksLakewatchDatasourceConfigProviderConfig <a name="DataDatabricksLakewatchDatasourceConfigProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource_config

dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#workspace_id DataDatabricksLakewatchDatasourceConfigA#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#workspace_id DataDatabricksLakewatchDatasourceConfigA#workspace_id}.

---

### DataDatabricksLakewatchDatasourceConfigUpdatedBy <a name="DataDatabricksLakewatchDatasourceConfigUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource_config

dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#display_name DataDatabricksLakewatchDatasourceConfigA#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#email DataDatabricksLakewatchDatasourceConfigA#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#id DataDatabricksLakewatchDatasourceConfigA#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#principal_type DataDatabricksLakewatchDatasourceConfigA#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#display_name DataDatabricksLakewatchDatasourceConfigA#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#email DataDatabricksLakewatchDatasourceConfigA#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#id DataDatabricksLakewatchDatasourceConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasource_config#principal_type DataDatabricksLakewatchDatasourceConfigA#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference <a name="DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource_config

dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig">DataDatabricksLakewatchDatasourceConfigProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchDatasourceConfigProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigProviderConfig">DataDatabricksLakewatchDatasourceConfigProviderConfig</a>

---


### DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference <a name="DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasource_config

dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy">DataDatabricksLakewatchDatasourceConfigUpdatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourceConfigUpdatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasourceConfig.DataDatabricksLakewatchDatasourceConfigUpdatedBy">DataDatabricksLakewatchDatasourceConfigUpdatedBy</a>

---



