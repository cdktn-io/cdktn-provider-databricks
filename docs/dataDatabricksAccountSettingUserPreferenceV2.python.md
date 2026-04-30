# `dataDatabricksAccountSettingUserPreferenceV2` Submodule <a name="`dataDatabricksAccountSettingUserPreferenceV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountSettingUserPreferenceV2 <a name="DataDatabricksAccountSettingUserPreferenceV2" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_setting_user_preference_v2 databricks_account_setting_user_preference_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_account_setting_user_preference_v2

dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2(
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
  user_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_setting_user_preference_v2#name DataDatabricksAccountSettingUserPreferenceV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_setting_user_preference_v2#user_id DataDatabricksAccountSettingUserPreferenceV2#user_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_setting_user_preference_v2#name DataDatabricksAccountSettingUserPreferenceV2#name}.

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.Initializer.parameter.userId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_setting_user_preference_v2#user_id DataDatabricksAccountSettingUserPreferenceV2#user_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksAccountSettingUserPreferenceV2 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_account_setting_user_preference_v2

dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_account_setting_user_preference_v2

dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_account_setting_user_preference_v2

dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_account_setting_user_preference_v2

dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksAccountSettingUserPreferenceV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAccountSettingUserPreferenceV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAccountSettingUserPreferenceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_setting_user_preference_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountSettingUserPreferenceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.booleanVal">boolean_val</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference">DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.effectiveBooleanVal">effective_boolean_val</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference">DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.effectiveStringVal">effective_string_val</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference">DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.stringVal">string_val</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference">DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.userId">user_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `boolean_val`<sup>Required</sup> <a name="boolean_val" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.booleanVal"></a>

```python
boolean_val: DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference">DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference</a>

---

##### `effective_boolean_val`<sup>Required</sup> <a name="effective_boolean_val" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.effectiveBooleanVal"></a>

```python
effective_boolean_val: DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference">DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference</a>

---

##### `effective_string_val`<sup>Required</sup> <a name="effective_string_val" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.effectiveStringVal"></a>

```python
effective_string_val: DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference">DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference</a>

---

##### `string_val`<sup>Required</sup> <a name="string_val" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.stringVal"></a>

```python
string_val: DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference">DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountSettingUserPreferenceV2BooleanVal <a name="DataDatabricksAccountSettingUserPreferenceV2BooleanVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_account_setting_user_preference_v2

dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal(
  value: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal.property.value">value</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal.property.value"></a>

```python
value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}.

---

### DataDatabricksAccountSettingUserPreferenceV2Config <a name="DataDatabricksAccountSettingUserPreferenceV2Config" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_account_setting_user_preference_v2

dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  user_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_setting_user_preference_v2#name DataDatabricksAccountSettingUserPreferenceV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_setting_user_preference_v2#user_id DataDatabricksAccountSettingUserPreferenceV2#user_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_setting_user_preference_v2#name DataDatabricksAccountSettingUserPreferenceV2#name}.

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2Config.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_setting_user_preference_v2#user_id DataDatabricksAccountSettingUserPreferenceV2#user_id}.

---

### DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal <a name="DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_account_setting_user_preference_v2

dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal(
  value: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal.property.value">value</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal.property.value"></a>

```python
value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}.

---

### DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal <a name="DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_account_setting_user_preference_v2

dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}.

---

### DataDatabricksAccountSettingUserPreferenceV2StringVal <a name="DataDatabricksAccountSettingUserPreferenceV2StringVal" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_account_setting_user_preference_v2

dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.1/docs/data-sources/account_setting_user_preference_v2#value DataDatabricksAccountSettingUserPreferenceV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference <a name="DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_account_setting_user_preference_v2

dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.valueInput">value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.value">value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal">DataDatabricksAccountSettingUserPreferenceV2BooleanVal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.valueInput"></a>

```python
value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.value"></a>

```python
value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanValOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAccountSettingUserPreferenceV2BooleanVal
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2BooleanVal">DataDatabricksAccountSettingUserPreferenceV2BooleanVal</a>

---


### DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference <a name="DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_account_setting_user_preference_v2

dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.valueInput">value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.value">value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal">DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.valueInput"></a>

```python
value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.value"></a>

```python
value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanValOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal">DataDatabricksAccountSettingUserPreferenceV2EffectiveBooleanVal</a>

---


### DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference <a name="DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_account_setting_user_preference_v2

dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal">DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringValOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal">DataDatabricksAccountSettingUserPreferenceV2EffectiveStringVal</a>

---


### DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference <a name="DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_account_setting_user_preference_v2

dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal">DataDatabricksAccountSettingUserPreferenceV2StringVal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringValOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAccountSettingUserPreferenceV2StringVal
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountSettingUserPreferenceV2.DataDatabricksAccountSettingUserPreferenceV2StringVal">DataDatabricksAccountSettingUserPreferenceV2StringVal</a>

---



