# `dataDatabricksDisasterRecoveryFailoverGroups` Submodule <a name="`dataDatabricksDisasterRecoveryFailoverGroups` Submodule" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDisasterRecoveryFailoverGroups <a name="DataDatabricksDisasterRecoveryFailoverGroups" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups databricks_disaster_recovery_failover_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  page_size: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#parent DataDatabricksDisasterRecoveryFailoverGroups#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#page_size DataDatabricksDisasterRecoveryFailoverGroups#page_size}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#parent DataDatabricksDisasterRecoveryFailoverGroups#parent}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#page_size DataDatabricksDisasterRecoveryFailoverGroups#page_size}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.resetPageSize">reset_page_size</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.resetPageSize"></a>

```python
def reset_page_size() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksDisasterRecoveryFailoverGroups resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksDisasterRecoveryFailoverGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksDisasterRecoveryFailoverGroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksDisasterRecoveryFailoverGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDisasterRecoveryFailoverGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.failoverGroups">failover_groups</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `failover_groups`<sup>Required</sup> <a name="failover_groups" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.failoverGroups"></a>

```python
failover_groups: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDisasterRecoveryFailoverGroupsConfig <a name="DataDatabricksDisasterRecoveryFailoverGroupsConfig" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  page_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#parent DataDatabricksDisasterRecoveryFailoverGroups#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#page_size DataDatabricksDisasterRecoveryFailoverGroups#page_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#parent DataDatabricksDisasterRecoveryFailoverGroups#parent}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#page_size DataDatabricksDisasterRecoveryFailoverGroups#page_size}.

---

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}.

---

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets(
  catalogs: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs],
  data_replication_workspace_set: str,
  location_mappings: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.property.catalogs">catalogs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#catalogs DataDatabricksDisasterRecoveryFailoverGroups#catalogs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.property.dataReplicationWorkspaceSet">data_replication_workspace_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#data_replication_workspace_set DataDatabricksDisasterRecoveryFailoverGroups#data_replication_workspace_set}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.property.locationMappings">location_mappings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#location_mappings DataDatabricksDisasterRecoveryFailoverGroups#location_mappings}. |

---

##### `catalogs`<sup>Required</sup> <a name="catalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.property.catalogs"></a>

```python
catalogs: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#catalogs DataDatabricksDisasterRecoveryFailoverGroups#catalogs}.

---

##### `data_replication_workspace_set`<sup>Required</sup> <a name="data_replication_workspace_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.property.dataReplicationWorkspaceSet"></a>

```python
data_replication_workspace_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#data_replication_workspace_set DataDatabricksDisasterRecoveryFailoverGroups#data_replication_workspace_set}.

---

##### `location_mappings`<sup>Optional</sup> <a name="location_mappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets.property.locationMappings"></a>

```python
location_mappings: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#location_mappings DataDatabricksDisasterRecoveryFailoverGroups#location_mappings}.

---

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}.

---

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings(
  name: str,
  uri_by_region: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings.property.uriByRegion">uri_by_region</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#uri_by_region DataDatabricksDisasterRecoveryFailoverGroups#uri_by_region}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}.

---

##### `uri_by_region`<sup>Required</sup> <a name="uri_by_region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings.property.uriByRegion"></a>

```python
uri_by_region: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#uri_by_region DataDatabricksDisasterRecoveryFailoverGroups#uri_by_region}.

---

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion(
  region: str,
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#region DataDatabricksDisasterRecoveryFailoverGroups#region}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#uri DataDatabricksDisasterRecoveryFailoverGroups#uri}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#region DataDatabricksDisasterRecoveryFailoverGroups#region}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#uri DataDatabricksDisasterRecoveryFailoverGroups#uri}.

---

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets(
  name: str,
  workspace_ids: typing.List[str],
  replicate_workspace_assets: bool | IResolvable = None,
  stable_url_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.workspaceIds">workspace_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#workspace_ids DataDatabricksDisasterRecoveryFailoverGroups#workspace_ids}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.replicateWorkspaceAssets">replicate_workspace_assets</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#replicate_workspace_assets DataDatabricksDisasterRecoveryFailoverGroups#replicate_workspace_assets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.stableUrlNames">stable_url_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#stable_url_names DataDatabricksDisasterRecoveryFailoverGroups#stable_url_names}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}.

---

##### `workspace_ids`<sup>Required</sup> <a name="workspace_ids" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.workspaceIds"></a>

```python
workspace_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#workspace_ids DataDatabricksDisasterRecoveryFailoverGroups#workspace_ids}.

---

##### `replicate_workspace_assets`<sup>Optional</sup> <a name="replicate_workspace_assets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.replicateWorkspaceAssets"></a>

```python
replicate_workspace_assets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#replicate_workspace_assets DataDatabricksDisasterRecoveryFailoverGroups#replicate_workspace_assets}.

---

##### `stable_url_names`<sup>Optional</sup> <a name="stable_url_names" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets.property.stableUrlNames"></a>

```python
stable_url_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_failover_groups#stable_url_names DataDatabricksDisasterRecoveryFailoverGroups#stable_url_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups</a>]

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.effectivePrimaryRegion">effective_primary_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.initialPrimaryRegion">initial_primary_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.replicationPoint">replication_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.unityCatalogAssets">unity_catalog_assets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.workspaceSets">workspace_sets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_primary_region`<sup>Required</sup> <a name="effective_primary_region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.effectivePrimaryRegion"></a>

```python
effective_primary_region: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `initial_primary_region`<sup>Required</sup> <a name="initial_primary_region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.initialPrimaryRegion"></a>

```python
initial_primary_region: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `replication_point`<sup>Required</sup> <a name="replication_point" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.replicationPoint"></a>

```python
replication_point: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `unity_catalog_assets`<sup>Required</sup> <a name="unity_catalog_assets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.unityCatalogAssets"></a>

```python
unity_catalog_assets: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `workspace_sets`<sup>Required</sup> <a name="workspace_sets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.workspaceSets"></a>

```python
workspace_sets: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a>]

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings</a>]

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion">put_uri_by_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_uri_by_region` <a name="put_uri_by_region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion"></a>

```python
def put_uri_by_region(
  value: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.putUriByRegion.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegion">uri_by_region</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegionInput">uri_by_region_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_by_region`<sup>Required</sup> <a name="uri_by_region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegion"></a>

```python
uri_by_region: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `uri_by_region_input`<sup>Optional</sup> <a name="uri_by_region_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.uriByRegionInput"></a>

```python
uri_by_region_input: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a>]

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.putCatalogs">put_catalogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.putLocationMappings">put_location_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.resetLocationMappings">reset_location_mappings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_catalogs` <a name="put_catalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.putCatalogs"></a>

```python
def put_catalogs(
  value: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.putCatalogs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a>]

---

##### `put_location_mappings` <a name="put_location_mappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.putLocationMappings"></a>

```python
def put_location_mappings(
  value: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.putLocationMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings</a>]

---

##### `reset_location_mappings` <a name="reset_location_mappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.resetLocationMappings"></a>

```python
def reset_location_mappings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.catalogs">catalogs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.locationMappings">location_mappings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.catalogsInput">catalogs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSetInput">data_replication_workspace_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.locationMappingsInput">location_mappings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSet">data_replication_workspace_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalogs`<sup>Required</sup> <a name="catalogs" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.catalogs"></a>

```python
catalogs: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList</a>

---

##### `location_mappings`<sup>Required</sup> <a name="location_mappings" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.locationMappings"></a>

```python
location_mappings: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList</a>

---

##### `catalogs_input`<sup>Optional</sup> <a name="catalogs_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.catalogsInput"></a>

```python
catalogs_input: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs</a>]

---

##### `data_replication_workspace_set_input`<sup>Optional</sup> <a name="data_replication_workspace_set_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSetInput"></a>

```python
data_replication_workspace_set_input: str
```

- *Type:* str

---

##### `location_mappings_input`<sup>Optional</sup> <a name="location_mappings_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.locationMappingsInput"></a>

```python
location_mappings_input: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings</a>]

---

##### `data_replication_workspace_set`<sup>Required</sup> <a name="data_replication_workspace_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.dataReplicationWorkspaceSet"></a>

```python
data_replication_workspace_set: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets</a>

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets</a>]

---


### DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference <a name="DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_failover_groups

dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resetReplicateWorkspaceAssets">reset_replicate_workspace_assets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resetStableUrlNames">reset_stable_url_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_replicate_workspace_assets` <a name="reset_replicate_workspace_assets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resetReplicateWorkspaceAssets"></a>

```python
def reset_replicate_workspace_assets() -> None
```

##### `reset_stable_url_names` <a name="reset_stable_url_names" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.resetStableUrlNames"></a>

```python
def reset_stable_url_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.replicateWorkspaceAssetsInput">replicate_workspace_assets_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.stableUrlNamesInput">stable_url_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.workspaceIdsInput">workspace_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.replicateWorkspaceAssets">replicate_workspace_assets</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.stableUrlNames">stable_url_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.workspaceIds">workspace_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `replicate_workspace_assets_input`<sup>Optional</sup> <a name="replicate_workspace_assets_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.replicateWorkspaceAssetsInput"></a>

```python
replicate_workspace_assets_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `stable_url_names_input`<sup>Optional</sup> <a name="stable_url_names_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.stableUrlNamesInput"></a>

```python
stable_url_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `workspace_ids_input`<sup>Optional</sup> <a name="workspace_ids_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.workspaceIdsInput"></a>

```python
workspace_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `replicate_workspace_assets`<sup>Required</sup> <a name="replicate_workspace_assets" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.replicateWorkspaceAssets"></a>

```python
replicate_workspace_assets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `stable_url_names`<sup>Required</sup> <a name="stable_url_names" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.stableUrlNames"></a>

```python
stable_url_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `workspace_ids`<sup>Required</sup> <a name="workspace_ids" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.workspaceIds"></a>

```python
workspace_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryFailoverGroups.DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets">DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets</a>

---



