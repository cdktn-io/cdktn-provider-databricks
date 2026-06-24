# `dataDatabricksDisasterRecoveryFailoverGroup` Submodule <a name="`dataDatabricksDisasterRecoveryFailoverGroup` Submodule" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDisasterRecoveryFailoverGroup <a name="DataDatabricksDisasterRecoveryFailoverGroup" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group databricks_disaster_recovery_failover_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#name DataDatabricksDisasterRecoveryFailoverGroup#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#name DataDatabricksDisasterRecoveryFailoverGroup#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksDisasterRecoveryFailoverGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksDisasterRecoveryFailoverGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksDisasterRecoveryFailoverGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksDisasterRecoveryFailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDisasterRecoveryFailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.effectivePrimaryRegion">effective_primary_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.initialPrimaryRegion">initial_primary_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.replicationPoint">replication_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.unityCatalogAssets">unity_catalog_assets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.workspaceSets">workspace_sets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList">DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_primary_region`<sup>Required</sup> <a name="effective_primary_region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.effectivePrimaryRegion"></a>

```python
effective_primary_region: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `initial_primary_region`<sup>Required</sup> <a name="initial_primary_region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.initialPrimaryRegion"></a>

```python
initial_primary_region: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replication_point`<sup>Required</sup> <a name="replication_point" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.replicationPoint"></a>

```python
replication_point: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `unity_catalog_assets`<sup>Required</sup> <a name="unity_catalog_assets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.unityCatalogAssets"></a>

```python
unity_catalog_assets: DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `workspace_sets`<sup>Required</sup> <a name="workspace_sets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.workspaceSets"></a>

```python
workspace_sets: DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList">DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDisasterRecoveryFailoverGroupConfig <a name="DataDatabricksDisasterRecoveryFailoverGroupConfig" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#name DataDatabricksDisasterRecoveryFailoverGroup#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#name DataDatabricksDisasterRecoveryFailoverGroup#name}.

---

### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets(
  catalogs: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs],
  data_replication_workspace_set: str,
  location_mappings: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets.property.catalogs">catalogs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#catalogs DataDatabricksDisasterRecoveryFailoverGroup#catalogs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets.property.dataReplicationWorkspaceSet">data_replication_workspace_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#data_replication_workspace_set DataDatabricksDisasterRecoveryFailoverGroup#data_replication_workspace_set}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets.property.locationMappings">location_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#location_mappings DataDatabricksDisasterRecoveryFailoverGroup#location_mappings}. |

---

##### `catalogs`<sup>Required</sup> <a name="catalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets.property.catalogs"></a>

```python
catalogs: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#catalogs DataDatabricksDisasterRecoveryFailoverGroup#catalogs}.

---

##### `data_replication_workspace_set`<sup>Required</sup> <a name="data_replication_workspace_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets.property.dataReplicationWorkspaceSet"></a>

```python
data_replication_workspace_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#data_replication_workspace_set DataDatabricksDisasterRecoveryFailoverGroup#data_replication_workspace_set}.

---

##### `location_mappings`<sup>Optional</sup> <a name="location_mappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets.property.locationMappings"></a>

```python
location_mappings: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#location_mappings DataDatabricksDisasterRecoveryFailoverGroup#location_mappings}.

---

### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#name DataDatabricksDisasterRecoveryFailoverGroup#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#name DataDatabricksDisasterRecoveryFailoverGroup#name}.

---

### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings(
  name: str,
  uri_by_region: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#name DataDatabricksDisasterRecoveryFailoverGroup#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.uriByRegion">uri_by_region</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#uri_by_region DataDatabricksDisasterRecoveryFailoverGroup#uri_by_region}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#name DataDatabricksDisasterRecoveryFailoverGroup#name}.

---

##### `uri_by_region`<sup>Required</sup> <a name="uri_by_region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings.property.uriByRegion"></a>

```python
uri_by_region: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#uri_by_region DataDatabricksDisasterRecoveryFailoverGroup#uri_by_region}.

---

### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion(
  region: str,
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#region DataDatabricksDisasterRecoveryFailoverGroup#region}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#uri DataDatabricksDisasterRecoveryFailoverGroup#uri}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#region DataDatabricksDisasterRecoveryFailoverGroup#region}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#uri DataDatabricksDisasterRecoveryFailoverGroup#uri}.

---

### DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets <a name="DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets(
  name: str,
  replicate_workspace_assets: bool | IResolvable,
  workspace_ids: typing.List[str],
  stable_url_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#name DataDatabricksDisasterRecoveryFailoverGroup#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets.property.replicateWorkspaceAssets">replicate_workspace_assets</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#replicate_workspace_assets DataDatabricksDisasterRecoveryFailoverGroup#replicate_workspace_assets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets.property.workspaceIds">workspace_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#workspace_ids DataDatabricksDisasterRecoveryFailoverGroup#workspace_ids}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets.property.stableUrlNames">stable_url_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#stable_url_names DataDatabricksDisasterRecoveryFailoverGroup#stable_url_names}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#name DataDatabricksDisasterRecoveryFailoverGroup#name}.

---

##### `replicate_workspace_assets`<sup>Required</sup> <a name="replicate_workspace_assets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets.property.replicateWorkspaceAssets"></a>

```python
replicate_workspace_assets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#replicate_workspace_assets DataDatabricksDisasterRecoveryFailoverGroup#replicate_workspace_assets}.

---

##### `workspace_ids`<sup>Required</sup> <a name="workspace_ids" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets.property.workspaceIds"></a>

```python
workspace_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#workspace_ids DataDatabricksDisasterRecoveryFailoverGroup#workspace_ids}.

---

##### `stable_url_names`<sup>Optional</sup> <a name="stable_url_names" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets.property.stableUrlNames"></a>

```python
stable_url_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/disaster_recovery_failover_group#stable_url_names DataDatabricksDisasterRecoveryFailoverGroup#stable_url_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>]

---


### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>]

---


### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion">put_uri_by_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_uri_by_region` <a name="put_uri_by_region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion"></a>

```python
def put_uri_by_region(
  value: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegion">uri_by_region</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegionInput">uri_by_region_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_by_region`<sup>Required</sup> <a name="uri_by_region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegion"></a>

```python
uri_by_region: DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `uri_by_region_input`<sup>Optional</sup> <a name="uri_by_region_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegionInput"></a>

```python
uri_by_region_input: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>]

---


### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putCatalogs">put_catalogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putLocationMappings">put_location_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resetLocationMappings">reset_location_mappings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_catalogs` <a name="put_catalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putCatalogs"></a>

```python
def put_catalogs(
  value: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putCatalogs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>]

---

##### `put_location_mappings` <a name="put_location_mappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putLocationMappings"></a>

```python
def put_location_mappings(
  value: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.putLocationMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>]

---

##### `reset_location_mappings` <a name="reset_location_mappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.resetLocationMappings"></a>

```python
def reset_location_mappings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogs">catalogs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappings">location_mappings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogsInput">catalogs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSetInput">data_replication_workspace_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappingsInput">location_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSet">data_replication_workspace_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalogs`<sup>Required</sup> <a name="catalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogs"></a>

```python
catalogs: DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList</a>

---

##### `location_mappings`<sup>Required</sup> <a name="location_mappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappings"></a>

```python
location_mappings: DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList</a>

---

##### `catalogs_input`<sup>Optional</sup> <a name="catalogs_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.catalogsInput"></a>

```python
catalogs_input: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs</a>]

---

##### `data_replication_workspace_set_input`<sup>Optional</sup> <a name="data_replication_workspace_set_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSetInput"></a>

```python
data_replication_workspace_set_input: str
```

- *Type:* str

---

##### `location_mappings_input`<sup>Optional</sup> <a name="location_mappings_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.locationMappingsInput"></a>

```python
location_mappings_input: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings</a>]

---

##### `data_replication_workspace_set`<sup>Required</sup> <a name="data_replication_workspace_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSet"></a>

```python
data_replication_workspace_set: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets">DataDatabricksDisasterRecoveryFailoverGroupUnityCatalogAssets</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList <a name="DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets">DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets">DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets</a>]

---


### DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_group

dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resetStableUrlNames">reset_stable_url_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_stable_url_names` <a name="reset_stable_url_names" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.resetStableUrlNames"></a>

```python
def reset_stable_url_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssetsInput">replicate_workspace_assets_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNamesInput">stable_url_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIdsInput">workspace_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssets">replicate_workspace_assets</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNames">stable_url_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIds">workspace_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets">DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `replicate_workspace_assets_input`<sup>Optional</sup> <a name="replicate_workspace_assets_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssetsInput"></a>

```python
replicate_workspace_assets_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `stable_url_names_input`<sup>Optional</sup> <a name="stable_url_names_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNamesInput"></a>

```python
stable_url_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `workspace_ids_input`<sup>Optional</sup> <a name="workspace_ids_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIdsInput"></a>

```python
workspace_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `replicate_workspace_assets`<sup>Required</sup> <a name="replicate_workspace_assets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.replicateWorkspaceAssets"></a>

```python
replicate_workspace_assets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `stable_url_names`<sup>Required</sup> <a name="stable_url_names" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.stableUrlNames"></a>

```python
stable_url_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `workspace_ids`<sup>Required</sup> <a name="workspace_ids" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.workspaceIds"></a>

```python
workspace_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSetsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroup.DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets">DataDatabricksDisasterRecoveryFailoverGroupWorkspaceSets</a>

---



