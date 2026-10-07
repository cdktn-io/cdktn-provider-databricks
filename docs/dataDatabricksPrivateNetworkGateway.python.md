# `dataDatabricksPrivateNetworkGateway` Submodule <a name="`dataDatabricksPrivateNetworkGateway` Submodule" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPrivateNetworkGateway <a name="DataDatabricksPrivateNetworkGateway" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway databricks_private_network_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway(
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#name DataDatabricksPrivateNetworkGateway#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#name DataDatabricksPrivateNetworkGateway#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksPrivateNetworkGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksPrivateNetworkGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksPrivateNetworkGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksPrivateNetworkGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPrivateNetworkGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.awsCloudConnection">aws_cloud_connection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.azureCloudConnection">azure_cloud_connection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.bandwidthTierGigabitsPerSecond">bandwidth_tier_gigabits_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList">DataDatabricksPrivateNetworkGatewayDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.privateDnsResolvers">private_dns_resolvers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList">DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.trafficMode">traffic_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `aws_cloud_connection`<sup>Required</sup> <a name="aws_cloud_connection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.awsCloudConnection"></a>

```python
aws_cloud_connection: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference</a>

---

##### `azure_cloud_connection`<sup>Required</sup> <a name="azure_cloud_connection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.azureCloudConnection"></a>

```python
azure_cloud_connection: DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference</a>

---

##### `bandwidth_tier_gigabits_per_second`<sup>Required</sup> <a name="bandwidth_tier_gigabits_per_second" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.bandwidthTierGigabitsPerSecond"></a>

```python
bandwidth_tier_gigabits_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.destinations"></a>

```python
destinations: DataDatabricksPrivateNetworkGatewayDestinationsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList">DataDatabricksPrivateNetworkGatewayDestinationsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `private_dns_resolvers`<sup>Required</sup> <a name="private_dns_resolvers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.privateDnsResolvers"></a>

```python
private_dns_resolvers: DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList">DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `traffic_mode`<sup>Required</sup> <a name="traffic_mode" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.trafficMode"></a>

```python
traffic_mode: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPrivateNetworkGatewayAwsCloudConnection <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection(
  cross_account_role: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole,
  gateway_subnets: IResolvable | typing.List[DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets],
  security_group_ids: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.property.crossAccountRole">cross_account_role</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#cross_account_role DataDatabricksPrivateNetworkGateway#cross_account_role}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.property.gatewaySubnets">gateway_subnets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#gateway_subnets DataDatabricksPrivateNetworkGateway#gateway_subnets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#security_group_ids DataDatabricksPrivateNetworkGateway#security_group_ids}. |

---

##### `cross_account_role`<sup>Required</sup> <a name="cross_account_role" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.property.crossAccountRole"></a>

```python
cross_account_role: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#cross_account_role DataDatabricksPrivateNetworkGateway#cross_account_role}.

---

##### `gateway_subnets`<sup>Required</sup> <a name="gateway_subnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.property.gatewaySubnets"></a>

```python
gateway_subnets: IResolvable | typing.List[DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#gateway_subnets DataDatabricksPrivateNetworkGateway#gateway_subnets}.

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#security_group_ids DataDatabricksPrivateNetworkGateway#security_group_ids}.

---

### DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole(
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#role_arn DataDatabricksPrivateNetworkGateway#role_arn}. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#role_arn DataDatabricksPrivateNetworkGateway#role_arn}.

---

### DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets(
  subnet_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#subnet_id DataDatabricksPrivateNetworkGateway#subnet_id}. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#subnet_id DataDatabricksPrivateNetworkGateway#subnet_id}.

---

### DataDatabricksPrivateNetworkGatewayAzureCloudConnection <a name="DataDatabricksPrivateNetworkGatewayAzureCloudConnection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection(
  gateway_subnet: DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection.property.gatewaySubnet">gateway_subnet</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#gateway_subnet DataDatabricksPrivateNetworkGateway#gateway_subnet}. |

---

##### `gateway_subnet`<sup>Required</sup> <a name="gateway_subnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection.property.gatewaySubnet"></a>

```python
gateway_subnet: DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#gateway_subnet DataDatabricksPrivateNetworkGateway#gateway_subnet}.

---

### DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet <a name="DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet(
  resource_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#resource_id DataDatabricksPrivateNetworkGateway#resource_id}. |

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#resource_id DataDatabricksPrivateNetworkGateway#resource_id}.

---

### DataDatabricksPrivateNetworkGatewayConfig <a name="DataDatabricksPrivateNetworkGatewayConfig" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig(
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#name DataDatabricksPrivateNetworkGateway#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#name DataDatabricksPrivateNetworkGateway#name}.

---

### DataDatabricksPrivateNetworkGatewayDestinations <a name="DataDatabricksPrivateNetworkGatewayDestinations" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations(
  destination_type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations.property.destinationType">destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#destination_type DataDatabricksPrivateNetworkGateway#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#value DataDatabricksPrivateNetworkGateway#value}. |

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#destination_type DataDatabricksPrivateNetworkGateway#destination_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#value DataDatabricksPrivateNetworkGateway#value}.

---

### DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers <a name="DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers(
  resolver_type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers.property.resolverType">resolver_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#resolver_type DataDatabricksPrivateNetworkGateway#resolver_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#value DataDatabricksPrivateNetworkGateway#value}. |

---

##### `resolver_type`<sup>Required</sup> <a name="resolver_type" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers.property.resolverType"></a>

```python
resolver_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#resolver_type DataDatabricksPrivateNetworkGateway#resolver_type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#value DataDatabricksPrivateNetworkGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---


### DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>]

---


### DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>

---


### DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference <a name="DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole">put_cross_account_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets">put_gateway_subnets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cross_account_role` <a name="put_cross_account_role" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole"></a>

```python
def put_cross_account_role(
  role_arn: str
) -> None
```

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.putCrossAccountRole.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#role_arn DataDatabricksPrivateNetworkGateway#role_arn}.

---

##### `put_gateway_subnets` <a name="put_gateway_subnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets"></a>

```python
def put_gateway_subnets(
  value: IResolvable | typing.List[DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.putGatewaySubnets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRole">cross_account_role</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnets">gateway_subnets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRoleInput">cross_account_role_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnetsInput">gateway_subnets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection">DataDatabricksPrivateNetworkGatewayAwsCloudConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cross_account_role`<sup>Required</sup> <a name="cross_account_role" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRole"></a>

```python
cross_account_role: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRoleOutputReference</a>

---

##### `gateway_subnets`<sup>Required</sup> <a name="gateway_subnets" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnets"></a>

```python
gateway_subnets: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnetsList</a>

---

##### `cross_account_role_input`<sup>Optional</sup> <a name="cross_account_role_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.crossAccountRoleInput"></a>

```python
cross_account_role_input: DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionCrossAccountRole</a>

---

##### `gateway_subnets_input`<sup>Optional</sup> <a name="gateway_subnets_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.gatewaySubnetsInput"></a>

```python
gateway_subnets_input: IResolvable | typing.List[DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets">DataDatabricksPrivateNetworkGatewayAwsCloudConnectionGatewaySubnets</a>]

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnectionOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPrivateNetworkGatewayAwsCloudConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAwsCloudConnection">DataDatabricksPrivateNetworkGatewayAwsCloudConnection</a>

---


### DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference <a name="DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---


### DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference <a name="DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet">put_gateway_subnet</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gateway_subnet` <a name="put_gateway_subnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet"></a>

```python
def put_gateway_subnet(
  resource_id: str
) -> None
```

###### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.putGatewaySubnet.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/private_network_gateway#resource_id DataDatabricksPrivateNetworkGateway#resource_id}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnet">gateway_subnet</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnetInput">gateway_subnet_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection">DataDatabricksPrivateNetworkGatewayAzureCloudConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gateway_subnet`<sup>Required</sup> <a name="gateway_subnet" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnet"></a>

```python
gateway_subnet: DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnetOutputReference</a>

---

##### `gateway_subnet_input`<sup>Optional</sup> <a name="gateway_subnet_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.gatewaySubnetInput"></a>

```python
gateway_subnet_input: DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet">DataDatabricksPrivateNetworkGatewayAzureCloudConnectionGatewaySubnet</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnectionOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPrivateNetworkGatewayAzureCloudConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayAzureCloudConnection">DataDatabricksPrivateNetworkGatewayAzureCloudConnection</a>

---


### DataDatabricksPrivateNetworkGatewayDestinationsList <a name="DataDatabricksPrivateNetworkGatewayDestinationsList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksPrivateNetworkGatewayDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations">DataDatabricksPrivateNetworkGatewayDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksPrivateNetworkGatewayDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations">DataDatabricksPrivateNetworkGatewayDestinations</a>]

---


### DataDatabricksPrivateNetworkGatewayDestinationsOutputReference <a name="DataDatabricksPrivateNetworkGatewayDestinationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.destinationTypeInput">destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations">DataDatabricksPrivateNetworkGatewayDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_type_input`<sup>Optional</sup> <a name="destination_type_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.destinationTypeInput"></a>

```python
destination_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPrivateNetworkGatewayDestinations
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayDestinations">DataDatabricksPrivateNetworkGatewayDestinations</a>

---


### DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList <a name="DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers</a>]

---


### DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference <a name="DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_private_network_gateway

dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverTypeInput">resolver_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverType">resolver_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resolver_type_input`<sup>Optional</sup> <a name="resolver_type_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverTypeInput"></a>

```python
resolver_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `resolver_type`<sup>Required</sup> <a name="resolver_type" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.resolverType"></a>

```python
resolver_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolversOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPrivateNetworkGateway.DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers">DataDatabricksPrivateNetworkGatewayPrivateDnsResolvers</a>

---



