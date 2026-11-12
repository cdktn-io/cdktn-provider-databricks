# `dataDatabricksLakewatchAlertConfig` Submodule <a name="`dataDatabricksLakewatchAlertConfig` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchAlertConfig <a name="DataDatabricksLakewatchAlertConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config databricks_lakewatch_alert_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig(
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
  provider_config: DataDatabricksLakewatchAlertConfigProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#name DataDatabricksLakewatchAlertConfig#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#provider_config DataDatabricksLakewatchAlertConfig#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#name DataDatabricksLakewatchAlertConfig#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#provider_config DataDatabricksLakewatchAlertConfig#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchAlertConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksLakewatchAlertConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksLakewatchAlertConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksLakewatchAlertConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchAlertConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.defaultSecurityAlertCollationWindow">default_security_alert_collation_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.defaultSystemAlertCollationWindow">default_system_alert_collation_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.effectiveDefaultSecurityAlertCollationWindow">effective_default_security_alert_collation_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.effectiveDefaultSystemAlertCollationWindow">effective_default_system_alert_collation_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference">DataDatabricksLakewatchAlertConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.securityAlertExportConfig">security_alert_export_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.systemAlertExportConfig">system_alert_export_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.updatedBy">updated_by</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference">DataDatabricksLakewatchAlertConfigUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `default_security_alert_collation_window`<sup>Required</sup> <a name="default_security_alert_collation_window" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.defaultSecurityAlertCollationWindow"></a>

```python
default_security_alert_collation_window: str
```

- *Type:* str

---

##### `default_system_alert_collation_window`<sup>Required</sup> <a name="default_system_alert_collation_window" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.defaultSystemAlertCollationWindow"></a>

```python
default_system_alert_collation_window: str
```

- *Type:* str

---

##### `effective_default_security_alert_collation_window`<sup>Required</sup> <a name="effective_default_security_alert_collation_window" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.effectiveDefaultSecurityAlertCollationWindow"></a>

```python
effective_default_security_alert_collation_window: str
```

- *Type:* str

---

##### `effective_default_system_alert_collation_window`<sup>Required</sup> <a name="effective_default_system_alert_collation_window" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.effectiveDefaultSystemAlertCollationWindow"></a>

```python
effective_default_system_alert_collation_window: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchAlertConfigProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference">DataDatabricksLakewatchAlertConfigProviderConfigOutputReference</a>

---

##### `security_alert_export_config`<sup>Required</sup> <a name="security_alert_export_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.securityAlertExportConfig"></a>

```python
security_alert_export_config: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference</a>

---

##### `system_alert_export_config`<sup>Required</sup> <a name="system_alert_export_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.systemAlertExportConfig"></a>

```python
system_alert_export_config: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference</a>

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.updatedBy"></a>

```python
updated_by: DataDatabricksLakewatchAlertConfigUpdatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference">DataDatabricksLakewatchAlertConfigUpdatedByOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksLakewatchAlertConfigProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchAlertConfigConfig <a name="DataDatabricksLakewatchAlertConfigConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksLakewatchAlertConfigProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#name DataDatabricksLakewatchAlertConfig#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#provider_config DataDatabricksLakewatchAlertConfig#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#name DataDatabricksLakewatchAlertConfig#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchAlertConfigProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#provider_config DataDatabricksLakewatchAlertConfig#provider_config}.

---

### DataDatabricksLakewatchAlertConfigProviderConfig <a name="DataDatabricksLakewatchAlertConfigProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig(
  enabled: bool | IResolvable = None,
  jira: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira = None,
  service_now: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow = None,
  slack: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack = None,
  tines: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines = None,
  webhook: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook = None,
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#enabled DataDatabricksLakewatchAlertConfig#enabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.jira">jira</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#jira DataDatabricksLakewatchAlertConfig#jira}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#service_now DataDatabricksLakewatchAlertConfig#service_now}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#slack DataDatabricksLakewatchAlertConfig#slack}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.tines">tines</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#tines DataDatabricksLakewatchAlertConfig#tines}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.webhook">webhook</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook DataDatabricksLakewatchAlertConfig#webhook}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#enabled DataDatabricksLakewatchAlertConfig#enabled}.

---

##### `jira`<sup>Optional</sup> <a name="jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.jira"></a>

```python
jira: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#jira DataDatabricksLakewatchAlertConfig#jira}.

---

##### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.serviceNow"></a>

```python
service_now: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#service_now DataDatabricksLakewatchAlertConfig#service_now}.

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.slack"></a>

```python
slack: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#slack DataDatabricksLakewatchAlertConfig#slack}.

---

##### `tines`<sup>Optional</sup> <a name="tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.tines"></a>

```python
tines: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#tines DataDatabricksLakewatchAlertConfig#tines}.

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.webhook"></a>

```python
webhook: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook DataDatabricksLakewatchAlertConfig#webhook}.

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira(
  api_token_uc_secret: str,
  default_issue_type: str,
  instance_url: str,
  project_key: str,
  user_email: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.apiTokenUcSecret">api_token_uc_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.defaultIssueType">default_issue_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.instanceUrl">instance_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.projectKey">project_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.userEmail">user_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}. |

---

##### `api_token_uc_secret`<sup>Required</sup> <a name="api_token_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.apiTokenUcSecret"></a>

```python
api_token_uc_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}.

---

##### `default_issue_type`<sup>Required</sup> <a name="default_issue_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.defaultIssueType"></a>

```python
default_issue_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}.

---

##### `instance_url`<sup>Required</sup> <a name="instance_url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}.

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}.

---

##### `user_email`<sup>Required</sup> <a name="user_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira.property.userEmail"></a>

```python
user_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow(
  client_id: str,
  client_secret_uc_secret: str,
  instance_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientSecretUcSecret">client_secret_uc_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}.

---

##### `client_secret_uc_secret`<sup>Required</sup> <a name="client_secret_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.clientSecretUcSecret"></a>

```python
client_secret_uc_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack(
  bot_token_uc_secret: str,
  channel: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.property.botTokenUcSecret">bot_token_uc_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.property.channel">channel</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}. |

---

##### `bot_token_uc_secret`<sup>Required</sup> <a name="bot_token_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.property.botTokenUcSecret"></a>

```python
bot_token_uc_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}.

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack.property.channel"></a>

```python
channel: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines(
  webhook_secret_uc_secret: str,
  webhook_uri: str,
  export_updates: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookSecretUcSecret">webhook_secret_uc_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookUri">webhook_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.exportUpdates">export_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}. |

---

##### `webhook_secret_uc_secret`<sup>Required</sup> <a name="webhook_secret_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookSecretUcSecret"></a>

```python
webhook_secret_uc_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}.

---

##### `webhook_uri`<sup>Required</sup> <a name="webhook_uri" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.webhookUri"></a>

```python
webhook_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}.

---

##### `export_updates`<sup>Optional</sup> <a name="export_updates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines.property.exportUpdates"></a>

```python
export_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook(
  export_updates: bool | IResolvable = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.property.exportUpdates">export_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}. |

---

##### `export_updates`<sup>Optional</sup> <a name="export_updates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.property.exportUpdates"></a>

```python
export_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfig <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig(
  enabled: bool | IResolvable = None,
  jira: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira = None,
  service_now: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow = None,
  slack: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack = None,
  tines: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines = None,
  webhook: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook = None,
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#enabled DataDatabricksLakewatchAlertConfig#enabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.jira">jira</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#jira DataDatabricksLakewatchAlertConfig#jira}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#service_now DataDatabricksLakewatchAlertConfig#service_now}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#slack DataDatabricksLakewatchAlertConfig#slack}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.tines">tines</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#tines DataDatabricksLakewatchAlertConfig#tines}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.webhook">webhook</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook DataDatabricksLakewatchAlertConfig#webhook}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#enabled DataDatabricksLakewatchAlertConfig#enabled}.

---

##### `jira`<sup>Optional</sup> <a name="jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.jira"></a>

```python
jira: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#jira DataDatabricksLakewatchAlertConfig#jira}.

---

##### `service_now`<sup>Optional</sup> <a name="service_now" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.serviceNow"></a>

```python
service_now: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#service_now DataDatabricksLakewatchAlertConfig#service_now}.

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.slack"></a>

```python
slack: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#slack DataDatabricksLakewatchAlertConfig#slack}.

---

##### `tines`<sup>Optional</sup> <a name="tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.tines"></a>

```python
tines: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#tines DataDatabricksLakewatchAlertConfig#tines}.

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.webhook"></a>

```python
webhook: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook DataDatabricksLakewatchAlertConfig#webhook}.

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#workspace_id DataDatabricksLakewatchAlertConfig#workspace_id}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira(
  api_token_uc_secret: str,
  default_issue_type: str,
  instance_url: str,
  project_key: str,
  user_email: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.apiTokenUcSecret">api_token_uc_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.defaultIssueType">default_issue_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.instanceUrl">instance_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.projectKey">project_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.userEmail">user_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}. |

---

##### `api_token_uc_secret`<sup>Required</sup> <a name="api_token_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.apiTokenUcSecret"></a>

```python
api_token_uc_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}.

---

##### `default_issue_type`<sup>Required</sup> <a name="default_issue_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.defaultIssueType"></a>

```python
default_issue_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}.

---

##### `instance_url`<sup>Required</sup> <a name="instance_url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}.

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}.

---

##### `user_email`<sup>Required</sup> <a name="user_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira.property.userEmail"></a>

```python
user_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow(
  client_id: str,
  client_secret_uc_secret: str,
  instance_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientSecretUcSecret">client_secret_uc_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}.

---

##### `client_secret_uc_secret`<sup>Required</sup> <a name="client_secret_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.clientSecretUcSecret"></a>

```python
client_secret_uc_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}.

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack(
  bot_token_uc_secret: str,
  channel: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.property.botTokenUcSecret">bot_token_uc_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.property.channel">channel</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}. |

---

##### `bot_token_uc_secret`<sup>Required</sup> <a name="bot_token_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.property.botTokenUcSecret"></a>

```python
bot_token_uc_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}.

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack.property.channel"></a>

```python
channel: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines(
  webhook_secret_uc_secret: str,
  webhook_uri: str,
  export_updates: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.webhookSecretUcSecret">webhook_secret_uc_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.webhookUri">webhook_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.exportUpdates">export_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}. |

---

##### `webhook_secret_uc_secret`<sup>Required</sup> <a name="webhook_secret_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.webhookSecretUcSecret"></a>

```python
webhook_secret_uc_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}.

---

##### `webhook_uri`<sup>Required</sup> <a name="webhook_uri" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.webhookUri"></a>

```python
webhook_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}.

---

##### `export_updates`<sup>Optional</sup> <a name="export_updates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines.property.exportUpdates"></a>

```python
export_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook(
  export_updates: bool | IResolvable = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.property.exportUpdates">export_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}. |

---

##### `export_updates`<sup>Optional</sup> <a name="export_updates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.property.exportUpdates"></a>

```python
export_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}.

---

### DataDatabricksLakewatchAlertConfigUpdatedBy <a name="DataDatabricksLakewatchAlertConfigUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#display_name DataDatabricksLakewatchAlertConfig#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#email DataDatabricksLakewatchAlertConfig#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#id DataDatabricksLakewatchAlertConfig#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#principal_type DataDatabricksLakewatchAlertConfig#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#display_name DataDatabricksLakewatchAlertConfig#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#email DataDatabricksLakewatchAlertConfig#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#id DataDatabricksLakewatchAlertConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#principal_type DataDatabricksLakewatchAlertConfig#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchAlertConfigProviderConfigOutputReference <a name="DataDatabricksLakewatchAlertConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchAlertConfigProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigProviderConfig">DataDatabricksLakewatchAlertConfigProviderConfig</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput">api_token_uc_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput">default_issue_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrlInput">instance_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKeyInput">project_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmailInput">user_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecret">api_token_uc_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueType">default_issue_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrl">instance_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKey">project_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmail">user_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_token_uc_secret_input`<sup>Optional</sup> <a name="api_token_uc_secret_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput"></a>

```python
api_token_uc_secret_input: str
```

- *Type:* str

---

##### `default_issue_type_input`<sup>Optional</sup> <a name="default_issue_type_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput"></a>

```python
default_issue_type_input: str
```

- *Type:* str

---

##### `instance_url_input`<sup>Optional</sup> <a name="instance_url_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrlInput"></a>

```python
instance_url_input: str
```

- *Type:* str

---

##### `project_key_input`<sup>Optional</sup> <a name="project_key_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKeyInput"></a>

```python
project_key_input: str
```

- *Type:* str

---

##### `user_email_input`<sup>Optional</sup> <a name="user_email_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmailInput"></a>

```python
user_email_input: str
```

- *Type:* str

---

##### `api_token_uc_secret`<sup>Required</sup> <a name="api_token_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.apiTokenUcSecret"></a>

```python
api_token_uc_secret: str
```

- *Type:* str

---

##### `default_issue_type`<sup>Required</sup> <a name="default_issue_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.defaultIssueType"></a>

```python
default_issue_type: str
```

- *Type:* str

---

##### `instance_url`<sup>Required</sup> <a name="instance_url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

---

##### `user_email`<sup>Required</sup> <a name="user_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.userEmail"></a>

```python
user_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira">put_jira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow">put_service_now</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack">put_slack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines">put_tines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook">put_webhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetJira">reset_jira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetServiceNow">reset_service_now</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetSlack">reset_slack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetTines">reset_tines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWebhook">reset_webhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_jira` <a name="put_jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira"></a>

```python
def put_jira(
  api_token_uc_secret: str,
  default_issue_type: str,
  instance_url: str,
  project_key: str,
  user_email: str
) -> None
```

###### `api_token_uc_secret`<sup>Required</sup> <a name="api_token_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira.parameter.apiTokenUcSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}.

---

###### `default_issue_type`<sup>Required</sup> <a name="default_issue_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira.parameter.defaultIssueType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}.

---

###### `instance_url`<sup>Required</sup> <a name="instance_url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira.parameter.instanceUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}.

---

###### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira.parameter.projectKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}.

---

###### `user_email`<sup>Required</sup> <a name="user_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putJira.parameter.userEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}.

---

##### `put_service_now` <a name="put_service_now" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow"></a>

```python
def put_service_now(
  client_id: str,
  client_secret_uc_secret: str,
  instance_id: str
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}.

---

###### `client_secret_uc_secret`<sup>Required</sup> <a name="client_secret_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow.parameter.clientSecretUcSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}.

---

###### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putServiceNow.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}.

---

##### `put_slack` <a name="put_slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack"></a>

```python
def put_slack(
  bot_token_uc_secret: str,
  channel: str
) -> None
```

###### `bot_token_uc_secret`<sup>Required</sup> <a name="bot_token_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack.parameter.botTokenUcSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}.

---

###### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putSlack.parameter.channel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}.

---

##### `put_tines` <a name="put_tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines"></a>

```python
def put_tines(
  webhook_secret_uc_secret: str,
  webhook_uri: str,
  export_updates: bool | IResolvable = None
) -> None
```

###### `webhook_secret_uc_secret`<sup>Required</sup> <a name="webhook_secret_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines.parameter.webhookSecretUcSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}.

---

###### `webhook_uri`<sup>Required</sup> <a name="webhook_uri" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines.parameter.webhookUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}.

---

###### `export_updates`<sup>Optional</sup> <a name="export_updates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putTines.parameter.exportUpdates"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

##### `put_webhook` <a name="put_webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook"></a>

```python
def put_webhook(
  export_updates: bool | IResolvable = None,
  url: str = None
) -> None
```

###### `export_updates`<sup>Optional</sup> <a name="export_updates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook.parameter.exportUpdates"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.putWebhook.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_jira` <a name="reset_jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetJira"></a>

```python
def reset_jira() -> None
```

##### `reset_service_now` <a name="reset_service_now" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetServiceNow"></a>

```python
def reset_service_now() -> None
```

##### `reset_slack` <a name="reset_slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetSlack"></a>

```python
def reset_slack() -> None
```

##### `reset_tines` <a name="reset_tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetTines"></a>

```python
def reset_tines() -> None
```

##### `reset_webhook` <a name="reset_webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWebhook"></a>

```python
def reset_webhook() -> None
```

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jira">jira</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tines">tines</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhook">webhook</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jiraInput">jira_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNowInput">service_now_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slackInput">slack_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tinesInput">tines_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhookInput">webhook_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `jira`<sup>Required</sup> <a name="jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jira"></a>

```python
jira: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJiraOutputReference</a>

---

##### `service_now`<sup>Required</sup> <a name="service_now" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNow"></a>

```python
service_now: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slack"></a>

```python
slack: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference</a>

---

##### `tines`<sup>Required</sup> <a name="tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tines"></a>

```python
tines: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhook"></a>

```python
webhook: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `jira_input`<sup>Optional</sup> <a name="jira_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.jiraInput"></a>

```python
jira_input: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigJira</a>

---

##### `service_now_input`<sup>Optional</sup> <a name="service_now_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.serviceNowInput"></a>

```python
service_now_input: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

---

##### `slack_input`<sup>Optional</sup> <a name="slack_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.slackInput"></a>

```python
slack_input: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a>

---

##### `tines_input`<sup>Optional</sup> <a name="tines_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.tinesInput"></a>

```python
tines_input: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a>

---

##### `webhook_input`<sup>Optional</sup> <a name="webhook_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.webhookInput"></a>

```python
webhook_input: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfig</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput">client_secret_uc_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret">client_secret_uc_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_uc_secret_input`<sup>Optional</sup> <a name="client_secret_uc_secret_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput"></a>

```python
client_secret_uc_secret_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret_uc_secret`<sup>Required</sup> <a name="client_secret_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret"></a>

```python
client_secret_uc_secret: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigServiceNow</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput">bot_token_uc_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecret">bot_token_uc_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bot_token_uc_secret_input`<sup>Optional</sup> <a name="bot_token_uc_secret_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput"></a>

```python
bot_token_uc_secret_input: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `bot_token_uc_secret`<sup>Required</sup> <a name="bot_token_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.botTokenUcSecret"></a>

```python
bot_token_uc_secret: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlackOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigSlack</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resetExportUpdates">reset_export_updates</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_export_updates` <a name="reset_export_updates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.resetExportUpdates"></a>

```python
def reset_export_updates() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdatesInput">export_updates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput">webhook_secret_uc_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUriInput">webhook_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdates">export_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret">webhook_secret_uc_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUri">webhook_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_updates_input`<sup>Optional</sup> <a name="export_updates_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdatesInput"></a>

```python
export_updates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `webhook_secret_uc_secret_input`<sup>Optional</sup> <a name="webhook_secret_uc_secret_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput"></a>

```python
webhook_secret_uc_secret_input: str
```

- *Type:* str

---

##### `webhook_uri_input`<sup>Optional</sup> <a name="webhook_uri_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUriInput"></a>

```python
webhook_uri_input: str
```

- *Type:* str

---

##### `export_updates`<sup>Required</sup> <a name="export_updates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.exportUpdates"></a>

```python
export_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `webhook_secret_uc_secret`<sup>Required</sup> <a name="webhook_secret_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret"></a>

```python
webhook_secret_uc_secret: str
```

- *Type:* str

---

##### `webhook_uri`<sup>Required</sup> <a name="webhook_uri" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.webhookUri"></a>

```python
webhook_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTinesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigTines</a>

---


### DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference <a name="DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetExportUpdates">reset_export_updates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_export_updates` <a name="reset_export_updates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetExportUpdates"></a>

```python
def reset_export_updates() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdatesInput">export_updates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdates">export_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_updates_input`<sup>Optional</sup> <a name="export_updates_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdatesInput"></a>

```python
export_updates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `export_updates`<sup>Required</sup> <a name="export_updates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.exportUpdates"></a>

```python
export_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhookOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSecurityAlertExportConfigWebhook</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput">api_token_uc_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput">default_issue_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrlInput">instance_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKeyInput">project_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmailInput">user_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecret">api_token_uc_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueType">default_issue_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrl">instance_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKey">project_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmail">user_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_token_uc_secret_input`<sup>Optional</sup> <a name="api_token_uc_secret_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecretInput"></a>

```python
api_token_uc_secret_input: str
```

- *Type:* str

---

##### `default_issue_type_input`<sup>Optional</sup> <a name="default_issue_type_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueTypeInput"></a>

```python
default_issue_type_input: str
```

- *Type:* str

---

##### `instance_url_input`<sup>Optional</sup> <a name="instance_url_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrlInput"></a>

```python
instance_url_input: str
```

- *Type:* str

---

##### `project_key_input`<sup>Optional</sup> <a name="project_key_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKeyInput"></a>

```python
project_key_input: str
```

- *Type:* str

---

##### `user_email_input`<sup>Optional</sup> <a name="user_email_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmailInput"></a>

```python
user_email_input: str
```

- *Type:* str

---

##### `api_token_uc_secret`<sup>Required</sup> <a name="api_token_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.apiTokenUcSecret"></a>

```python
api_token_uc_secret: str
```

- *Type:* str

---

##### `default_issue_type`<sup>Required</sup> <a name="default_issue_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.defaultIssueType"></a>

```python
default_issue_type: str
```

- *Type:* str

---

##### `instance_url`<sup>Required</sup> <a name="instance_url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.instanceUrl"></a>

```python
instance_url: str
```

- *Type:* str

---

##### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.projectKey"></a>

```python
project_key: str
```

- *Type:* str

---

##### `user_email`<sup>Required</sup> <a name="user_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.userEmail"></a>

```python
user_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira">put_jira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow">put_service_now</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack">put_slack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines">put_tines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook">put_webhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetJira">reset_jira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetServiceNow">reset_service_now</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetSlack">reset_slack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetTines">reset_tines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWebhook">reset_webhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_jira` <a name="put_jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira"></a>

```python
def put_jira(
  api_token_uc_secret: str,
  default_issue_type: str,
  instance_url: str,
  project_key: str,
  user_email: str
) -> None
```

###### `api_token_uc_secret`<sup>Required</sup> <a name="api_token_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira.parameter.apiTokenUcSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#api_token_uc_secret DataDatabricksLakewatchAlertConfig#api_token_uc_secret}.

---

###### `default_issue_type`<sup>Required</sup> <a name="default_issue_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira.parameter.defaultIssueType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#default_issue_type DataDatabricksLakewatchAlertConfig#default_issue_type}.

---

###### `instance_url`<sup>Required</sup> <a name="instance_url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira.parameter.instanceUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_url DataDatabricksLakewatchAlertConfig#instance_url}.

---

###### `project_key`<sup>Required</sup> <a name="project_key" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira.parameter.projectKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#project_key DataDatabricksLakewatchAlertConfig#project_key}.

---

###### `user_email`<sup>Required</sup> <a name="user_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putJira.parameter.userEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#user_email DataDatabricksLakewatchAlertConfig#user_email}.

---

##### `put_service_now` <a name="put_service_now" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow"></a>

```python
def put_service_now(
  client_id: str,
  client_secret_uc_secret: str,
  instance_id: str
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_id DataDatabricksLakewatchAlertConfig#client_id}.

---

###### `client_secret_uc_secret`<sup>Required</sup> <a name="client_secret_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow.parameter.clientSecretUcSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#client_secret_uc_secret DataDatabricksLakewatchAlertConfig#client_secret_uc_secret}.

---

###### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putServiceNow.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#instance_id DataDatabricksLakewatchAlertConfig#instance_id}.

---

##### `put_slack` <a name="put_slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack"></a>

```python
def put_slack(
  bot_token_uc_secret: str,
  channel: str
) -> None
```

###### `bot_token_uc_secret`<sup>Required</sup> <a name="bot_token_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack.parameter.botTokenUcSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#bot_token_uc_secret DataDatabricksLakewatchAlertConfig#bot_token_uc_secret}.

---

###### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putSlack.parameter.channel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#channel DataDatabricksLakewatchAlertConfig#channel}.

---

##### `put_tines` <a name="put_tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines"></a>

```python
def put_tines(
  webhook_secret_uc_secret: str,
  webhook_uri: str,
  export_updates: bool | IResolvable = None
) -> None
```

###### `webhook_secret_uc_secret`<sup>Required</sup> <a name="webhook_secret_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines.parameter.webhookSecretUcSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_secret_uc_secret DataDatabricksLakewatchAlertConfig#webhook_secret_uc_secret}.

---

###### `webhook_uri`<sup>Required</sup> <a name="webhook_uri" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines.parameter.webhookUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#webhook_uri DataDatabricksLakewatchAlertConfig#webhook_uri}.

---

###### `export_updates`<sup>Optional</sup> <a name="export_updates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putTines.parameter.exportUpdates"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

##### `put_webhook` <a name="put_webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook"></a>

```python
def put_webhook(
  export_updates: bool | IResolvable = None,
  url: str = None
) -> None
```

###### `export_updates`<sup>Optional</sup> <a name="export_updates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook.parameter.exportUpdates"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#export_updates DataDatabricksLakewatchAlertConfig#export_updates}.

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.putWebhook.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_alert_config#url DataDatabricksLakewatchAlertConfig#url}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_jira` <a name="reset_jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetJira"></a>

```python
def reset_jira() -> None
```

##### `reset_service_now` <a name="reset_service_now" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetServiceNow"></a>

```python
def reset_service_now() -> None
```

##### `reset_slack` <a name="reset_slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetSlack"></a>

```python
def reset_slack() -> None
```

##### `reset_tines` <a name="reset_tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetTines"></a>

```python
def reset_tines() -> None
```

##### `reset_webhook` <a name="reset_webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWebhook"></a>

```python
def reset_webhook() -> None
```

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jira">jira</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNow">service_now</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tines">tines</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhook">webhook</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jiraInput">jira_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNowInput">service_now_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slackInput">slack_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tinesInput">tines_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhookInput">webhook_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig">DataDatabricksLakewatchAlertConfigSystemAlertExportConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `jira`<sup>Required</sup> <a name="jira" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jira"></a>

```python
jira: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJiraOutputReference</a>

---

##### `service_now`<sup>Required</sup> <a name="service_now" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNow"></a>

```python
service_now: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slack"></a>

```python
slack: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference</a>

---

##### `tines`<sup>Required</sup> <a name="tines" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tines"></a>

```python
tines: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhook"></a>

```python
webhook: DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `jira_input`<sup>Optional</sup> <a name="jira_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.jiraInput"></a>

```python
jira_input: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigJira</a>

---

##### `service_now_input`<sup>Optional</sup> <a name="service_now_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.serviceNowInput"></a>

```python
service_now_input: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

---

##### `slack_input`<sup>Optional</sup> <a name="slack_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.slackInput"></a>

```python
slack_input: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a>

---

##### `tines_input`<sup>Optional</sup> <a name="tines_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.tinesInput"></a>

```python
tines_input: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a>

---

##### `webhook_input`<sup>Optional</sup> <a name="webhook_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.webhookInput"></a>

```python
webhook_input: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a>

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchAlertConfigSystemAlertExportConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfig">DataDatabricksLakewatchAlertConfigSystemAlertExportConfig</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput">client_secret_uc_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret">client_secret_uc_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_uc_secret_input`<sup>Optional</sup> <a name="client_secret_uc_secret_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecretInput"></a>

```python
client_secret_uc_secret_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret_uc_secret`<sup>Required</sup> <a name="client_secret_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.clientSecretUcSecret"></a>

```python
client_secret_uc_secret: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNowOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigServiceNow</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput">bot_token_uc_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channelInput">channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecret">bot_token_uc_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channel">channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bot_token_uc_secret_input`<sup>Optional</sup> <a name="bot_token_uc_secret_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecretInput"></a>

```python
bot_token_uc_secret_input: str
```

- *Type:* str

---

##### `channel_input`<sup>Optional</sup> <a name="channel_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channelInput"></a>

```python
channel_input: str
```

- *Type:* str

---

##### `bot_token_uc_secret`<sup>Required</sup> <a name="bot_token_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.botTokenUcSecret"></a>

```python
bot_token_uc_secret: str
```

- *Type:* str

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.channel"></a>

```python
channel: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlackOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigSlack</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resetExportUpdates">reset_export_updates</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_export_updates` <a name="reset_export_updates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.resetExportUpdates"></a>

```python
def reset_export_updates() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdatesInput">export_updates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput">webhook_secret_uc_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUriInput">webhook_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdates">export_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret">webhook_secret_uc_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUri">webhook_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_updates_input`<sup>Optional</sup> <a name="export_updates_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdatesInput"></a>

```python
export_updates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `webhook_secret_uc_secret_input`<sup>Optional</sup> <a name="webhook_secret_uc_secret_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecretInput"></a>

```python
webhook_secret_uc_secret_input: str
```

- *Type:* str

---

##### `webhook_uri_input`<sup>Optional</sup> <a name="webhook_uri_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUriInput"></a>

```python
webhook_uri_input: str
```

- *Type:* str

---

##### `export_updates`<sup>Required</sup> <a name="export_updates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.exportUpdates"></a>

```python
export_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `webhook_secret_uc_secret`<sup>Required</sup> <a name="webhook_secret_uc_secret" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookSecretUcSecret"></a>

```python
webhook_secret_uc_secret: str
```

- *Type:* str

---

##### `webhook_uri`<sup>Required</sup> <a name="webhook_uri" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.webhookUri"></a>

```python
webhook_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTinesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigTines</a>

---


### DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference <a name="DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetExportUpdates">reset_export_updates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_export_updates` <a name="reset_export_updates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetExportUpdates"></a>

```python
def reset_export_updates() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdatesInput">export_updates_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdates">export_updates</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_updates_input`<sup>Optional</sup> <a name="export_updates_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdatesInput"></a>

```python
export_updates_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `export_updates`<sup>Required</sup> <a name="export_updates" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.exportUpdates"></a>

```python
export_updates: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhookOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook">DataDatabricksLakewatchAlertConfigSystemAlertExportConfigWebhook</a>

---


### DataDatabricksLakewatchAlertConfigUpdatedByOutputReference <a name="DataDatabricksLakewatchAlertConfigUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_alert_config

dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy">DataDatabricksLakewatchAlertConfigUpdatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchAlertConfigUpdatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchAlertConfig.DataDatabricksLakewatchAlertConfigUpdatedBy">DataDatabricksLakewatchAlertConfigUpdatedBy</a>

---



