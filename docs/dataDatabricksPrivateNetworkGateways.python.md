# `dataDatabricksPrivateNetworkGateways` Submodule <a name="`dataDatabricksPrivateNetworkGateways` Submodule" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPrivateNetworkGateways <a name="DataDatabricksPrivateNetworkGateways" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways databricks_private_network_gateways}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#parent DataDatabricksPrivateNetworkGateways#parent}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#parent DataDatabricksPrivateNetworkGateways#parent}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksPrivateNetworkGateways resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksPrivateNetworkGateways resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksPrivateNetworkGateways to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksPrivateNetworkGateways that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPrivateNetworkGateways to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.privateNetworkGateways">private_network_gateways</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `private_network_gateways`<sup>Required</sup> <a name="private_network_gateways" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.privateNetworkGateways"></a>

```python
private_network_gateways: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList</a>

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGateways.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPrivateNetworkGatewaysConfig <a name="DataDatabricksPrivateNetworkGatewaysConfig" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#parent DataDatabricksPrivateNetworkGateways#parent}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#parent DataDatabricksPrivateNetworkGateways#parent}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#name DataDatabricksPrivateNetworkGateways#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#name DataDatabricksPrivateNetworkGateways#name}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection(
  cross_account_role: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole,
  gateway_subnets: IResolvable | typing.List[DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets],
  security_group_ids: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.crossAccountRole">cross_account_role</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#cross_account_role DataDatabricksPrivateNetworkGateways#cross_account_role}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.gatewaySubnets">gateway_subnets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#gateway_subnets DataDatabricksPrivateNetworkGateways#gateway_subnets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#security_group_ids DataDatabricksPrivateNetworkGateways#security_group_ids}. |

---

##### `cross_account_role`<sup>Required</sup> <a name="cross_account_role" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.crossAccountRole"></a>

```python
cross_account_role: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#cross_account_role DataDatabricksPrivateNetworkGateways#cross_account_role}.

---

##### `gateway_subnets`<sup>Required</sup> <a name="gateway_subnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.gatewaySubnets"></a>

```python
gateway_subnets: IResolvable | typing.List[DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#gateway_subnets DataDatabricksPrivateNetworkGateways#gateway_subnets}.

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#security_group_ids DataDatabricksPrivateNetworkGateways#security_group_ids}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole(
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#role_arn DataDatabricksPrivateNetworkGateways#role_arn}. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#role_arn DataDatabricksPrivateNetworkGateways#role_arn}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets(
  subnet_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#subnet_id DataDatabricksPrivateNetworkGateways#subnet_id}. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#subnet_id DataDatabricksPrivateNetworkGateways#subnet_id}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection(
  gateway_subnet: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection.property.gatewaySubnet">gateway_subnet</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#gateway_subnet DataDatabricksPrivateNetworkGateways#gateway_subnet}. |

---

##### `gateway_subnet`<sup>Required</sup> <a name="gateway_subnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection.property.gatewaySubnet"></a>

```python
gateway_subnet: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#gateway_subnet DataDatabricksPrivateNetworkGateways#gateway_subnet}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet(
  resource_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resource_id DataDatabricksPrivateNetworkGateways#resource_id}. |

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resource_id DataDatabricksPrivateNetworkGateways#resource_id}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations(
  destination_type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.property.destinationType">destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#destination_type DataDatabricksPrivateNetworkGateways#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#value DataDatabricksPrivateNetworkGateways#value}. |

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#destination_type DataDatabricksPrivateNetworkGateways#destination_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#value DataDatabricksPrivateNetworkGateways#value}.

---

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers(
  resolver_type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.property.resolverType">resolver_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resolver_type DataDatabricksPrivateNetworkGateways#resolver_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#value DataDatabricksPrivateNetworkGateways#value}. |

---

##### `resolver_type`<sup>Required</sup> <a name="resolver_type" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.property.resolverType"></a>

```python
resolver_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resolver_type DataDatabricksPrivateNetworkGateways#resolver_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#value DataDatabricksPrivateNetworkGateways#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>]

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putCrossAccountRole">put_cross_account_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putGatewaySubnets">put_gateway_subnets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cross_account_role` <a name="put_cross_account_role" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putCrossAccountRole"></a>

```python
def put_cross_account_role(
  role_arn: str
) -> None
```

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putCrossAccountRole.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#role_arn DataDatabricksPrivateNetworkGateways#role_arn}.

---

##### `put_gateway_subnets` <a name="put_gateway_subnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putGatewaySubnets"></a>

```python
def put_gateway_subnets(
  value: IResolvable | typing.List[DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.putGatewaySubnets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.crossAccountRole">cross_account_role</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.gatewaySubnets">gateway_subnets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.crossAccountRoleInput">cross_account_role_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.gatewaySubnetsInput">gateway_subnets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cross_account_role`<sup>Required</sup> <a name="cross_account_role" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.crossAccountRole"></a>

```python
cross_account_role: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRoleOutputReference</a>

---

##### `gateway_subnets`<sup>Required</sup> <a name="gateway_subnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.gatewaySubnets"></a>

```python
gateway_subnets: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnetsList</a>

---

##### `cross_account_role_input`<sup>Optional</sup> <a name="cross_account_role_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.crossAccountRoleInput"></a>

```python
cross_account_role_input: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionCrossAccountRole</a>

---

##### `gateway_subnets_input`<sup>Optional</sup> <a name="gateway_subnets_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.gatewaySubnetsInput"></a>

```python
gateway_subnets_input: IResolvable | typing.List[DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionGatewaySubnets</a>]

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnection</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.putGatewaySubnet">put_gateway_subnet</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gateway_subnet` <a name="put_gateway_subnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.putGatewaySubnet"></a>

```python
def put_gateway_subnet(
  resource_id: str
) -> None
```

###### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.putGatewaySubnet.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateways#resource_id DataDatabricksPrivateNetworkGateways#resource_id}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.gatewaySubnet">gateway_subnet</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.gatewaySubnetInput">gateway_subnet_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gateway_subnet`<sup>Required</sup> <a name="gateway_subnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.gatewaySubnet"></a>

```python
gateway_subnet: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnetOutputReference</a>

---

##### `gateway_subnet_input`<sup>Optional</sup> <a name="gateway_subnet_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.gatewaySubnetInput"></a>

```python
gateway_subnet_input: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionGatewaySubnet</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnection</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations</a>]

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.destinationTypeInput">destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_type_input`<sup>Optional</sup> <a name="destination_type_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.destinationTypeInput"></a>

```python
destination_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinations</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways</a>]

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.awsCloudConnection">aws_cloud_connection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.azureCloudConnection">azure_cloud_connection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.bandwidthTierGigabitsPerSecond">bandwidth_tier_gigabits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.privateDnsResolvers">private_dns_resolvers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.trafficMode">traffic_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_cloud_connection`<sup>Required</sup> <a name="aws_cloud_connection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.awsCloudConnection"></a>

```python
aws_cloud_connection: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAwsCloudConnectionOutputReference</a>

---

##### `azure_cloud_connection`<sup>Required</sup> <a name="azure_cloud_connection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.azureCloudConnection"></a>

```python
azure_cloud_connection: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysAzureCloudConnectionOutputReference</a>

---

##### `bandwidth_tier_gigabits_per_second`<sup>Required</sup> <a name="bandwidth_tier_gigabits_per_second" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.bandwidthTierGigabitsPerSecond"></a>

```python
bandwidth_tier_gigabits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.destinations"></a>

```python
destinations: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysDestinationsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `private_dns_resolvers`<sup>Required</sup> <a name="private_dns_resolvers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.privateDnsResolvers"></a>

```python
private_dns_resolvers: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `traffic_mode`<sup>Required</sup> <a name="traffic_mode" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.trafficMode"></a>

```python
traffic_mode: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGateways</a>

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers</a>]

---


### DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference <a name="DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateways

dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.resolverTypeInput">resolver_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.resolverType">resolver_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resolver_type_input`<sup>Optional</sup> <a name="resolver_type_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.resolverTypeInput"></a>

```python
resolver_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `resolver_type`<sup>Required</sup> <a name="resolver_type" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.resolverType"></a>

```python
resolver_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolversOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateways.DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewaysPrivateNetworkGatewaysPrivateDnsResolvers</a>

---



