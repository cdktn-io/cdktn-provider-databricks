# `dataDatabricksUsers` Submodule <a name="`dataDatabricksUsers` Submodule" id="@cdktn/provider-databricks.dataDatabricksUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksUsers <a name="DataDatabricksUsers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users databricks_users}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsers(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  extra_attributes: str = None,
  filter: str = None,
  users: IResolvable | typing.List[DataDatabricksUsersUsers] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.extraAttributes">extra_attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#extra_attributes DataDatabricksUsers#extra_attributes}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#filter DataDatabricksUsers#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.users">users</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#users DataDatabricksUsers#users}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `extra_attributes`<sup>Optional</sup> <a name="extra_attributes" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.extraAttributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#extra_attributes DataDatabricksUsers#extra_attributes}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#filter DataDatabricksUsers#filter}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.Initializer.parameter.users"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#users DataDatabricksUsers#users}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.putUsers">put_users</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetExtraAttributes">reset_extra_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetUsers">reset_users</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_users` <a name="put_users" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.putUsers"></a>

```python
def put_users(
  value: IResolvable | typing.List[DataDatabricksUsersUsers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.putUsers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a>]

---

##### `reset_extra_attributes` <a name="reset_extra_attributes" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetExtraAttributes"></a>

```python
def reset_extra_attributes() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_users` <a name="reset_users" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.resetUsers"></a>

```python
def reset_users() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksUsers resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksUsers resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksUsers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.users">users</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList">DataDatabricksUsersUsersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.extraAttributesInput">extra_attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.usersInput">users_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.extraAttributes">extra_attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.filter">filter</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.users"></a>

```python
users: DataDatabricksUsersUsersList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList">DataDatabricksUsersUsersList</a>

---

##### `extra_attributes_input`<sup>Optional</sup> <a name="extra_attributes_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.extraAttributesInput"></a>

```python
extra_attributes_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.usersInput"></a>

```python
users_input: IResolvable | typing.List[DataDatabricksUsersUsers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a>]

---

##### `extra_attributes`<sup>Required</sup> <a name="extra_attributes" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.extraAttributes"></a>

```python
extra_attributes: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksUsersConfig <a name="DataDatabricksUsersConfig" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsersConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  extra_attributes: str = None,
  filter: str = None,
  users: IResolvable | typing.List[DataDatabricksUsersUsers] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.extraAttributes">extra_attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#extra_attributes DataDatabricksUsers#extra_attributes}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#filter DataDatabricksUsers#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.users">users</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#users DataDatabricksUsers#users}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `extra_attributes`<sup>Optional</sup> <a name="extra_attributes" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.extraAttributes"></a>

```python
extra_attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#extra_attributes DataDatabricksUsers#extra_attributes}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#filter DataDatabricksUsers#filter}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersConfig.property.users"></a>

```python
users: IResolvable | typing.List[DataDatabricksUsersUsers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#users DataDatabricksUsers#users}.

---

### DataDatabricksUsersUsers <a name="DataDatabricksUsersUsers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsersUsers(
  active: bool | IResolvable = None,
  display_name: str = None,
  emails: IResolvable | typing.List[DataDatabricksUsersUsersEmails] = None,
  entitlements: IResolvable | typing.List[DataDatabricksUsersUsersEntitlements] = None,
  external_id: str = None,
  groups: IResolvable | typing.List[DataDatabricksUsersUsersGroups] = None,
  id: str = None,
  name: DataDatabricksUsersUsersName = None,
  roles: IResolvable | typing.List[DataDatabricksUsersUsersRoles] = None,
  schemas: typing.List[str] = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#active DataDatabricksUsers#active}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#display_name DataDatabricksUsers#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.emails">emails</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails">DataDatabricksUsersUsersEmails</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#emails DataDatabricksUsers#emails}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.entitlements">entitlements</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements">DataDatabricksUsersUsersEntitlements</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#entitlements DataDatabricksUsers#entitlements}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#external_id DataDatabricksUsers#external_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.groups">groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups">DataDatabricksUsersUsersGroups</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#groups DataDatabricksUsers#groups}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#id DataDatabricksUsers#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.name">name</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName">DataDatabricksUsersUsersName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#name DataDatabricksUsers#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.roles">roles</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles">DataDatabricksUsersUsersRoles</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#roles DataDatabricksUsers#roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#schemas DataDatabricksUsers#schemas}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#user_name DataDatabricksUsers#user_name}. |

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#active DataDatabricksUsers#active}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#display_name DataDatabricksUsers#display_name}.

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.emails"></a>

```python
emails: IResolvable | typing.List[DataDatabricksUsersUsersEmails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails">DataDatabricksUsersUsersEmails</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#emails DataDatabricksUsers#emails}.

---

##### `entitlements`<sup>Optional</sup> <a name="entitlements" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.entitlements"></a>

```python
entitlements: IResolvable | typing.List[DataDatabricksUsersUsersEntitlements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements">DataDatabricksUsersUsersEntitlements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#entitlements DataDatabricksUsers#entitlements}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#external_id DataDatabricksUsers#external_id}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.groups"></a>

```python
groups: IResolvable | typing.List[DataDatabricksUsersUsersGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups">DataDatabricksUsersUsersGroups</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#groups DataDatabricksUsers#groups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#id DataDatabricksUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.name"></a>

```python
name: DataDatabricksUsersUsersName
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName">DataDatabricksUsersUsersName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#name DataDatabricksUsers#name}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.roles"></a>

```python
roles: IResolvable | typing.List[DataDatabricksUsersUsersRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles">DataDatabricksUsersUsersRoles</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#roles DataDatabricksUsers#roles}.

---

##### `schemas`<sup>Optional</sup> <a name="schemas" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#schemas DataDatabricksUsers#schemas}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#user_name DataDatabricksUsers#user_name}.

---

### DataDatabricksUsersUsersEmails <a name="DataDatabricksUsersUsersEmails" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsersUsersEmails(
  display: str = None,
  primary: bool | IResolvable = None,
  ref: str = None,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.display">display</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#display DataDatabricksUsers#display}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#primary DataDatabricksUsers#primary}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.ref">ref</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#ref DataDatabricksUsers#ref}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#type DataDatabricksUsers#type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#value DataDatabricksUsers#value}. |

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.display"></a>

```python
display: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#display DataDatabricksUsers#display}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#primary DataDatabricksUsers#primary}.

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.ref"></a>

```python
ref: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#ref DataDatabricksUsers#ref}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#type DataDatabricksUsers#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#value DataDatabricksUsers#value}.

---

### DataDatabricksUsersUsersEntitlements <a name="DataDatabricksUsersUsersEntitlements" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsersUsersEntitlements(
  display: str = None,
  primary: bool | IResolvable = None,
  ref: str = None,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.display">display</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#display DataDatabricksUsers#display}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#primary DataDatabricksUsers#primary}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.ref">ref</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#ref DataDatabricksUsers#ref}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#type DataDatabricksUsers#type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#value DataDatabricksUsers#value}. |

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.display"></a>

```python
display: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#display DataDatabricksUsers#display}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#primary DataDatabricksUsers#primary}.

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.ref"></a>

```python
ref: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#ref DataDatabricksUsers#ref}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#type DataDatabricksUsers#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#value DataDatabricksUsers#value}.

---

### DataDatabricksUsersUsersGroups <a name="DataDatabricksUsersUsersGroups" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsersUsersGroups(
  display: str = None,
  primary: bool | IResolvable = None,
  ref: str = None,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.display">display</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#display DataDatabricksUsers#display}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#primary DataDatabricksUsers#primary}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.ref">ref</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#ref DataDatabricksUsers#ref}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#type DataDatabricksUsers#type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#value DataDatabricksUsers#value}. |

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.display"></a>

```python
display: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#display DataDatabricksUsers#display}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#primary DataDatabricksUsers#primary}.

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.ref"></a>

```python
ref: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#ref DataDatabricksUsers#ref}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#type DataDatabricksUsers#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#value DataDatabricksUsers#value}.

---

### DataDatabricksUsersUsersName <a name="DataDatabricksUsersUsersName" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsersUsersName(
  family_name: str = None,
  given_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName.property.familyName">family_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#family_name DataDatabricksUsers#family_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName.property.givenName">given_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#given_name DataDatabricksUsers#given_name}. |

---

##### `family_name`<sup>Optional</sup> <a name="family_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName.property.familyName"></a>

```python
family_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#family_name DataDatabricksUsers#family_name}.

---

##### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#given_name DataDatabricksUsers#given_name}.

---

### DataDatabricksUsersUsersRoles <a name="DataDatabricksUsersUsersRoles" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsersUsersRoles(
  display: str = None,
  primary: bool | IResolvable = None,
  ref: str = None,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.display">display</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#display DataDatabricksUsers#display}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#primary DataDatabricksUsers#primary}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.ref">ref</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#ref DataDatabricksUsers#ref}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#type DataDatabricksUsers#type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#value DataDatabricksUsers#value}. |

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.display"></a>

```python
display: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#display DataDatabricksUsers#display}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#primary DataDatabricksUsers#primary}.

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.ref"></a>

```python
ref: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#ref DataDatabricksUsers#ref}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#type DataDatabricksUsers#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#value DataDatabricksUsers#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksUsersUsersEmailsList <a name="DataDatabricksUsersUsersEmailsList" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsersUsersEmailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksUsersUsersEmailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails">DataDatabricksUsersUsersEmails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksUsersUsersEmails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails">DataDatabricksUsersUsersEmails</a>]

---


### DataDatabricksUsersUsersEmailsOutputReference <a name="DataDatabricksUsersUsersEmailsOutputReference" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetDisplay">reset_display</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetRef">reset_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display` <a name="reset_display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetDisplay"></a>

```python
def reset_display() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_ref` <a name="reset_ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetRef"></a>

```python
def reset_ref() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.displayInput">display_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.primaryInput">primary_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails">DataDatabricksUsersUsersEmails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_input`<sup>Optional</sup> <a name="display_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.displayInput"></a>

```python
display_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.primaryInput"></a>

```python
primary_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksUsersUsersEmails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails">DataDatabricksUsersUsersEmails</a>

---


### DataDatabricksUsersUsersEntitlementsList <a name="DataDatabricksUsersUsersEntitlementsList" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksUsersUsersEntitlementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements">DataDatabricksUsersUsersEntitlements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksUsersUsersEntitlements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements">DataDatabricksUsersUsersEntitlements</a>]

---


### DataDatabricksUsersUsersEntitlementsOutputReference <a name="DataDatabricksUsersUsersEntitlementsOutputReference" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetDisplay">reset_display</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetRef">reset_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display` <a name="reset_display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetDisplay"></a>

```python
def reset_display() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_ref` <a name="reset_ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetRef"></a>

```python
def reset_ref() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.displayInput">display_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.primaryInput">primary_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements">DataDatabricksUsersUsersEntitlements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_input`<sup>Optional</sup> <a name="display_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.displayInput"></a>

```python
display_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.primaryInput"></a>

```python
primary_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksUsersUsersEntitlements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements">DataDatabricksUsersUsersEntitlements</a>

---


### DataDatabricksUsersUsersGroupsList <a name="DataDatabricksUsersUsersGroupsList" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsersUsersGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksUsersUsersGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups">DataDatabricksUsersUsersGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksUsersUsersGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups">DataDatabricksUsersUsersGroups</a>]

---


### DataDatabricksUsersUsersGroupsOutputReference <a name="DataDatabricksUsersUsersGroupsOutputReference" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetDisplay">reset_display</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetRef">reset_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display` <a name="reset_display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetDisplay"></a>

```python
def reset_display() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_ref` <a name="reset_ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetRef"></a>

```python
def reset_ref() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.displayInput">display_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.primaryInput">primary_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups">DataDatabricksUsersUsersGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_input`<sup>Optional</sup> <a name="display_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.displayInput"></a>

```python
display_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.primaryInput"></a>

```python
primary_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksUsersUsersGroups
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups">DataDatabricksUsersUsersGroups</a>

---


### DataDatabricksUsersUsersList <a name="DataDatabricksUsersUsersList" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsersUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksUsersUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksUsersUsers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a>]

---


### DataDatabricksUsersUsersNameOutputReference <a name="DataDatabricksUsersUsersNameOutputReference" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.resetFamilyName">reset_family_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.resetGivenName">reset_given_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_family_name` <a name="reset_family_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.resetFamilyName"></a>

```python
def reset_family_name() -> None
```

##### `reset_given_name` <a name="reset_given_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.resetGivenName"></a>

```python
def reset_given_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.familyNameInput">family_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.givenNameInput">given_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.familyName">family_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName">DataDatabricksUsersUsersName</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `family_name_input`<sup>Optional</sup> <a name="family_name_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.familyNameInput"></a>

```python
family_name_input: str
```

- *Type:* str

---

##### `given_name_input`<sup>Optional</sup> <a name="given_name_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.givenNameInput"></a>

```python
given_name_input: str
```

- *Type:* str

---

##### `family_name`<sup>Required</sup> <a name="family_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.familyName"></a>

```python
family_name: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksUsersUsersName
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName">DataDatabricksUsersUsersName</a>

---


### DataDatabricksUsersUsersOutputReference <a name="DataDatabricksUsersUsersOutputReference" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsersUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putEmails">put_emails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putEntitlements">put_entitlements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putGroups">put_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putName">put_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putRoles">put_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetEmails">reset_emails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetEntitlements">reset_entitlements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetRoles">reset_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetSchemas">reset_schemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_emails` <a name="put_emails" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putEmails"></a>

```python
def put_emails(
  value: IResolvable | typing.List[DataDatabricksUsersUsersEmails]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putEmails.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails">DataDatabricksUsersUsersEmails</a>]

---

##### `put_entitlements` <a name="put_entitlements" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putEntitlements"></a>

```python
def put_entitlements(
  value: IResolvable | typing.List[DataDatabricksUsersUsersEntitlements]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putEntitlements.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements">DataDatabricksUsersUsersEntitlements</a>]

---

##### `put_groups` <a name="put_groups" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putGroups"></a>

```python
def put_groups(
  value: IResolvable | typing.List[DataDatabricksUsersUsersGroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups">DataDatabricksUsersUsersGroups</a>]

---

##### `put_name` <a name="put_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putName"></a>

```python
def put_name(
  family_name: str = None,
  given_name: str = None
) -> None
```

###### `family_name`<sup>Optional</sup> <a name="family_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putName.parameter.familyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#family_name DataDatabricksUsers#family_name}.

---

###### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putName.parameter.givenName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.112.0/docs/data-sources/users#given_name DataDatabricksUsers#given_name}.

---

##### `put_roles` <a name="put_roles" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putRoles"></a>

```python
def put_roles(
  value: IResolvable | typing.List[DataDatabricksUsersUsersRoles]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.putRoles.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles">DataDatabricksUsersUsersRoles</a>]

---

##### `reset_active` <a name="reset_active" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_emails` <a name="reset_emails" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetEmails"></a>

```python
def reset_emails() -> None
```

##### `reset_entitlements` <a name="reset_entitlements" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetEntitlements"></a>

```python
def reset_entitlements() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_groups` <a name="reset_groups" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetRoles"></a>

```python
def reset_roles() -> None
```

##### `reset_schemas` <a name="reset_schemas" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetSchemas"></a>

```python
def reset_schemas() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.resetUserName"></a>

```python
def reset_user_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.emails">emails</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList">DataDatabricksUsersUsersEmailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.entitlements">entitlements</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList">DataDatabricksUsersUsersEntitlementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.groups">groups</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList">DataDatabricksUsersUsersGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.name">name</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference">DataDatabricksUsersUsersNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.roles">roles</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList">DataDatabricksUsersUsersRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.activeInput">active_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.emailsInput">emails_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails">DataDatabricksUsersUsersEmails</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.entitlementsInput">entitlements_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements">DataDatabricksUsersUsersEntitlements</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.groupsInput">groups_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups">DataDatabricksUsersUsersGroups</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.nameInput">name_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName">DataDatabricksUsersUsersName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.rolesInput">roles_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles">DataDatabricksUsersUsersRoles</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.schemasInput">schemas_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.emails"></a>

```python
emails: DataDatabricksUsersUsersEmailsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmailsList">DataDatabricksUsersUsersEmailsList</a>

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.entitlements"></a>

```python
entitlements: DataDatabricksUsersUsersEntitlementsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlementsList">DataDatabricksUsersUsersEntitlementsList</a>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.groups"></a>

```python
groups: DataDatabricksUsersUsersGroupsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroupsList">DataDatabricksUsersUsersGroupsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.name"></a>

```python
name: DataDatabricksUsersUsersNameOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersNameOutputReference">DataDatabricksUsersUsersNameOutputReference</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.roles"></a>

```python
roles: DataDatabricksUsersUsersRolesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList">DataDatabricksUsersUsersRolesList</a>

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.activeInput"></a>

```python
active_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `emails_input`<sup>Optional</sup> <a name="emails_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.emailsInput"></a>

```python
emails_input: IResolvable | typing.List[DataDatabricksUsersUsersEmails]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEmails">DataDatabricksUsersUsersEmails</a>]

---

##### `entitlements_input`<sup>Optional</sup> <a name="entitlements_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.entitlementsInput"></a>

```python
entitlements_input: IResolvable | typing.List[DataDatabricksUsersUsersEntitlements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersEntitlements">DataDatabricksUsersUsersEntitlements</a>]

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.groupsInput"></a>

```python
groups_input: IResolvable | typing.List[DataDatabricksUsersUsersGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersGroups">DataDatabricksUsersUsersGroups</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.nameInput"></a>

```python
name_input: IResolvable | DataDatabricksUsersUsersName
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersName">DataDatabricksUsersUsersName</a>

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.rolesInput"></a>

```python
roles_input: IResolvable | typing.List[DataDatabricksUsersUsersRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles">DataDatabricksUsersUsersRoles</a>]

---

##### `schemas_input`<sup>Optional</sup> <a name="schemas_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.schemasInput"></a>

```python
schemas_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksUsersUsers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsers">DataDatabricksUsersUsers</a>

---


### DataDatabricksUsersUsersRolesList <a name="DataDatabricksUsersUsersRolesList" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsersUsersRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksUsersUsersRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles">DataDatabricksUsersUsersRoles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksUsersUsersRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles">DataDatabricksUsersUsersRoles</a>]

---


### DataDatabricksUsersUsersRolesOutputReference <a name="DataDatabricksUsersUsersRolesOutputReference" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_users

dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetDisplay">reset_display</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetRef">reset_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display` <a name="reset_display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetDisplay"></a>

```python
def reset_display() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_ref` <a name="reset_ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetRef"></a>

```python
def reset_ref() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.displayInput">display_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.primaryInput">primary_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.primary">primary</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles">DataDatabricksUsersUsersRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_input`<sup>Optional</sup> <a name="display_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.displayInput"></a>

```python
display_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.primaryInput"></a>

```python
primary_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.primary"></a>

```python
primary: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRolesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksUsersUsersRoles
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksUsers.DataDatabricksUsersUsersRoles">DataDatabricksUsersUsersRoles</a>

---



