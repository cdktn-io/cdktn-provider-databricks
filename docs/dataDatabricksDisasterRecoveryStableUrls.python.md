# `dataDatabricksDisasterRecoveryStableUrls` Submodule <a name="`dataDatabricksDisasterRecoveryStableUrls` Submodule" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDisasterRecoveryStableUrls <a name="DataDatabricksDisasterRecoveryStableUrls" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_stable_urls databricks_disaster_recovery_stable_urls}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_stable_urls

dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls(
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_stable_urls#parent DataDatabricksDisasterRecoveryStableUrls#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_stable_urls#page_size DataDatabricksDisasterRecoveryStableUrls#page_size}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_stable_urls#parent DataDatabricksDisasterRecoveryStableUrls#parent}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_stable_urls#page_size DataDatabricksDisasterRecoveryStableUrls#page_size}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.resetPageSize">reset_page_size</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.resetPageSize"></a>

```python
def reset_page_size() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksDisasterRecoveryStableUrls resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_stable_urls

dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_stable_urls

dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_stable_urls

dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_stable_urls

dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksDisasterRecoveryStableUrls resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksDisasterRecoveryStableUrls to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksDisasterRecoveryStableUrls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_stable_urls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDisasterRecoveryStableUrls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.stableUrls">stable_urls</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList">DataDatabricksDisasterRecoveryStableUrlsStableUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `stable_urls`<sup>Required</sup> <a name="stable_urls" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.stableUrls"></a>

```python
stable_urls: DataDatabricksDisasterRecoveryStableUrlsStableUrlsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList">DataDatabricksDisasterRecoveryStableUrlsStableUrlsList</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrls.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDisasterRecoveryStableUrlsConfig <a name="DataDatabricksDisasterRecoveryStableUrlsConfig" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_stable_urls

dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig(
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_stable_urls#parent DataDatabricksDisasterRecoveryStableUrls#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_stable_urls#page_size DataDatabricksDisasterRecoveryStableUrls#page_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_stable_urls#parent DataDatabricksDisasterRecoveryStableUrls#parent}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_stable_urls#page_size DataDatabricksDisasterRecoveryStableUrls#page_size}.

---

### DataDatabricksDisasterRecoveryStableUrlsStableUrls <a name="DataDatabricksDisasterRecoveryStableUrlsStableUrls" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_stable_urls

dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_stable_urls#name DataDatabricksDisasterRecoveryStableUrls#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/disaster_recovery_stable_urls#name DataDatabricksDisasterRecoveryStableUrls#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDisasterRecoveryStableUrlsStableUrlsList <a name="DataDatabricksDisasterRecoveryStableUrlsStableUrlsList" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_stable_urls

dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls">DataDatabricksDisasterRecoveryStableUrlsStableUrls</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDisasterRecoveryStableUrlsStableUrls]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls">DataDatabricksDisasterRecoveryStableUrlsStableUrls</a>]

---


### DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference <a name="DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_disaster_recovery_stable_urls

dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.effectiveWorkspaceId">effective_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.failoverGroupName">failover_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.initialWorkspaceId">initial_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.stableWorkspaceId">stable_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls">DataDatabricksDisasterRecoveryStableUrlsStableUrls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_workspace_id`<sup>Required</sup> <a name="effective_workspace_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.effectiveWorkspaceId"></a>

```python
effective_workspace_id: str
```

- *Type:* str

---

##### `failover_group_name`<sup>Required</sup> <a name="failover_group_name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.failoverGroupName"></a>

```python
failover_group_name: str
```

- *Type:* str

---

##### `initial_workspace_id`<sup>Required</sup> <a name="initial_workspace_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.initialWorkspaceId"></a>

```python
initial_workspace_id: str
```

- *Type:* str

---

##### `stable_workspace_id`<sup>Required</sup> <a name="stable_workspace_id" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.stableWorkspaceId"></a>

```python
stable_workspace_id: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrlsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDisasterRecoveryStableUrlsStableUrls
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDisasterRecoveryStableUrls.DataDatabricksDisasterRecoveryStableUrlsStableUrls">DataDatabricksDisasterRecoveryStableUrlsStableUrls</a>

---



