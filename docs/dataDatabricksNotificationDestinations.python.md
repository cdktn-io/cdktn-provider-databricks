# `dataDatabricksNotificationDestinations` Submodule <a name="`dataDatabricksNotificationDestinations` Submodule" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksNotificationDestinations <a name="DataDatabricksNotificationDestinations" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations databricks_notification_destinations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name_contains: str = None,
  provider_config: DataDatabricksNotificationDestinationsProviderConfig = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#display_name_contains DataDatabricksNotificationDestinations#display_name_contains}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfig">DataDatabricksNotificationDestinationsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#provider_config DataDatabricksNotificationDestinations#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#type DataDatabricksNotificationDestinations#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#display_name_contains DataDatabricksNotificationDestinations#display_name_contains}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfig">DataDatabricksNotificationDestinationsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#provider_config DataDatabricksNotificationDestinations#provider_config}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#type DataDatabricksNotificationDestinations#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#workspace_id DataDatabricksNotificationDestinations#workspace_id}.

---

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksNotificationDestinations resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksNotificationDestinations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksNotificationDestinations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksNotificationDestinations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksNotificationDestinations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.notificationDestinations">notification_destinations</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList">DataDatabricksNotificationDestinationsNotificationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference">DataDatabricksNotificationDestinationsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfig">DataDatabricksNotificationDestinationsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `notification_destinations`<sup>Required</sup> <a name="notification_destinations" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.notificationDestinations"></a>

```python
notification_destinations: DataDatabricksNotificationDestinationsNotificationDestinationsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList">DataDatabricksNotificationDestinationsNotificationDestinationsList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.providerConfig"></a>

```python
provider_config: DataDatabricksNotificationDestinationsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference">DataDatabricksNotificationDestinationsProviderConfigOutputReference</a>

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksNotificationDestinationsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfig">DataDatabricksNotificationDestinationsProviderConfig</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksNotificationDestinationsConfig <a name="DataDatabricksNotificationDestinationsConfig" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name_contains: str = None,
  provider_config: DataDatabricksNotificationDestinationsProviderConfig = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#display_name_contains DataDatabricksNotificationDestinations#display_name_contains}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfig">DataDatabricksNotificationDestinationsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#provider_config DataDatabricksNotificationDestinations#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#type DataDatabricksNotificationDestinations#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#display_name_contains DataDatabricksNotificationDestinations#display_name_contains}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksNotificationDestinationsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfig">DataDatabricksNotificationDestinationsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#provider_config DataDatabricksNotificationDestinations#provider_config}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#type DataDatabricksNotificationDestinations#type}.

---

### DataDatabricksNotificationDestinationsNotificationDestinations <a name="DataDatabricksNotificationDestinationsNotificationDestinations" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations(
  destination_type: str = None,
  display_name: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.property.destinationType">destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#destination_type DataDatabricksNotificationDestinations#destination_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#display_name DataDatabricksNotificationDestinations#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#id DataDatabricksNotificationDestinations#id}. |

---

##### `destination_type`<sup>Optional</sup> <a name="destination_type" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#destination_type DataDatabricksNotificationDestinations#destination_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#display_name DataDatabricksNotificationDestinations#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#id DataDatabricksNotificationDestinations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatabricksNotificationDestinationsProviderConfig <a name="DataDatabricksNotificationDestinationsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#workspace_id DataDatabricksNotificationDestinations#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.121.0/docs/data-sources/notification_destinations#workspace_id DataDatabricksNotificationDestinations#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksNotificationDestinationsNotificationDestinationsList <a name="DataDatabricksNotificationDestinationsNotificationDestinationsList" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations">DataDatabricksNotificationDestinationsNotificationDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksNotificationDestinationsNotificationDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations">DataDatabricksNotificationDestinationsNotificationDestinations</a>]

---


### DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference <a name="DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resetDestinationType">reset_destination_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_type` <a name="reset_destination_type" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resetDestinationType"></a>

```python
def reset_destination_type() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.destinationTypeInput">destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations">DataDatabricksNotificationDestinationsNotificationDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_type_input`<sup>Optional</sup> <a name="destination_type_input" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.destinationTypeInput"></a>

```python
destination_type_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksNotificationDestinationsNotificationDestinations
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations">DataDatabricksNotificationDestinationsNotificationDestinations</a>

---


### DataDatabricksNotificationDestinationsProviderConfigOutputReference <a name="DataDatabricksNotificationDestinationsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_notification_destinations

dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfig">DataDatabricksNotificationDestinationsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksNotificationDestinationsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsProviderConfig">DataDatabricksNotificationDestinationsProviderConfig</a>

---



