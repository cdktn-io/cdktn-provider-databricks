# `dataDatabricksPostgresBranch` Submodule <a name="`dataDatabricksPostgresBranch` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresBranch <a name="DataDatabricksPostgresBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch databricks_postgres_branch}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_branch

dataDatabricksPostgresBranch.DataDatabricksPostgresBranch(
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
  provider_config: DataDatabricksPostgresBranchProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#name DataDatabricksPostgresBranch#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#provider_config DataDatabricksPostgresBranch#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#name DataDatabricksPostgresBranch#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#provider_config DataDatabricksPostgresBranch#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#workspace_id DataDatabricksPostgresBranch#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresBranch resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_branch

dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_branch

dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_branch

dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_branch

dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksPostgresBranch resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksPostgresBranch to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksPostgresBranch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresBranch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.branchId">branch_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference">DataDatabricksPostgresBranchProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference">DataDatabricksPostgresBranchSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference">DataDatabricksPostgresBranchStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `branch_id`<sup>Required</sup> <a name="branch_id" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.branchId"></a>

```python
branch_id: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.providerConfig"></a>

```python
provider_config: DataDatabricksPostgresBranchProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference">DataDatabricksPostgresBranchProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.spec"></a>

```python
spec: DataDatabricksPostgresBranchSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference">DataDatabricksPostgresBranchSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.status"></a>

```python
status: DataDatabricksPostgresBranchStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference">DataDatabricksPostgresBranchStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksPostgresBranchProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranch.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresBranchConfig <a name="DataDatabricksPostgresBranchConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_branch

dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksPostgresBranchProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#name DataDatabricksPostgresBranch#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#provider_config DataDatabricksPostgresBranch#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#name DataDatabricksPostgresBranch#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksPostgresBranchProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#provider_config DataDatabricksPostgresBranch#provider_config}.

---

### DataDatabricksPostgresBranchProviderConfig <a name="DataDatabricksPostgresBranchProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_branch

dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#workspace_id DataDatabricksPostgresBranch#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#workspace_id DataDatabricksPostgresBranch#workspace_id}.

---

### DataDatabricksPostgresBranchSpec <a name="DataDatabricksPostgresBranchSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_branch

dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec(
  expire_time: str = None,
  is_protected: bool | IResolvable = None,
  no_expiry: bool | IResolvable = None,
  source_branch: str = None,
  source_branch_lsn: str = None,
  source_branch_time: str = None,
  ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.expireTime">expire_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#expire_time DataDatabricksPostgresBranch#expire_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.isProtected">is_protected</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#is_protected DataDatabricksPostgresBranch#is_protected}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.noExpiry">no_expiry</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#no_expiry DataDatabricksPostgresBranch#no_expiry}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranch">source_branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#source_branch DataDatabricksPostgresBranch#source_branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranchLsn">source_branch_lsn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#source_branch_lsn DataDatabricksPostgresBranch#source_branch_lsn}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranchTime">source_branch_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#source_branch_time DataDatabricksPostgresBranch#source_branch_time}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.ttl">ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#ttl DataDatabricksPostgresBranch#ttl}. |

---

##### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#expire_time DataDatabricksPostgresBranch#expire_time}.

---

##### `is_protected`<sup>Optional</sup> <a name="is_protected" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.isProtected"></a>

```python
is_protected: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#is_protected DataDatabricksPostgresBranch#is_protected}.

---

##### `no_expiry`<sup>Optional</sup> <a name="no_expiry" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.noExpiry"></a>

```python
no_expiry: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#no_expiry DataDatabricksPostgresBranch#no_expiry}.

---

##### `source_branch`<sup>Optional</sup> <a name="source_branch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranch"></a>

```python
source_branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#source_branch DataDatabricksPostgresBranch#source_branch}.

---

##### `source_branch_lsn`<sup>Optional</sup> <a name="source_branch_lsn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranchLsn"></a>

```python
source_branch_lsn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#source_branch_lsn DataDatabricksPostgresBranch#source_branch_lsn}.

---

##### `source_branch_time`<sup>Optional</sup> <a name="source_branch_time" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.sourceBranchTime"></a>

```python
source_branch_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#source_branch_time DataDatabricksPostgresBranch#source_branch_time}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_branch#ttl DataDatabricksPostgresBranch#ttl}.

---

### DataDatabricksPostgresBranchStatus <a name="DataDatabricksPostgresBranchStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatus.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_branch

dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatus()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresBranchProviderConfigOutputReference <a name="DataDatabricksPostgresBranchProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_branch

dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPostgresBranchProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchProviderConfig">DataDatabricksPostgresBranchProviderConfig</a>

---


### DataDatabricksPostgresBranchSpecOutputReference <a name="DataDatabricksPostgresBranchSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_branch

dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetExpireTime">reset_expire_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetIsProtected">reset_is_protected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetNoExpiry">reset_no_expiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranch">reset_source_branch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranchLsn">reset_source_branch_lsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranchTime">reset_source_branch_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expire_time` <a name="reset_expire_time" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetExpireTime"></a>

```python
def reset_expire_time() -> None
```

##### `reset_is_protected` <a name="reset_is_protected" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetIsProtected"></a>

```python
def reset_is_protected() -> None
```

##### `reset_no_expiry` <a name="reset_no_expiry" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetNoExpiry"></a>

```python
def reset_no_expiry() -> None
```

##### `reset_source_branch` <a name="reset_source_branch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranch"></a>

```python
def reset_source_branch() -> None
```

##### `reset_source_branch_lsn` <a name="reset_source_branch_lsn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranchLsn"></a>

```python
def reset_source_branch_lsn() -> None
```

##### `reset_source_branch_time` <a name="reset_source_branch_time" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetSourceBranchTime"></a>

```python
def reset_source_branch_time() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.expireTimeInput">expire_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.isProtectedInput">is_protected_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.noExpiryInput">no_expiry_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchInput">source_branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchLsnInput">source_branch_lsn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchTimeInput">source_branch_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.isProtected">is_protected</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.noExpiry">no_expiry</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranch">source_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchLsn">source_branch_lsn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchTime">source_branch_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec">DataDatabricksPostgresBranchSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expire_time_input`<sup>Optional</sup> <a name="expire_time_input" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.expireTimeInput"></a>

```python
expire_time_input: str
```

- *Type:* str

---

##### `is_protected_input`<sup>Optional</sup> <a name="is_protected_input" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.isProtectedInput"></a>

```python
is_protected_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `no_expiry_input`<sup>Optional</sup> <a name="no_expiry_input" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.noExpiryInput"></a>

```python
no_expiry_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `source_branch_input`<sup>Optional</sup> <a name="source_branch_input" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchInput"></a>

```python
source_branch_input: str
```

- *Type:* str

---

##### `source_branch_lsn_input`<sup>Optional</sup> <a name="source_branch_lsn_input" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchLsnInput"></a>

```python
source_branch_lsn_input: str
```

- *Type:* str

---

##### `source_branch_time_input`<sup>Optional</sup> <a name="source_branch_time_input" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchTimeInput"></a>

```python
source_branch_time_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `is_protected`<sup>Required</sup> <a name="is_protected" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.isProtected"></a>

```python
is_protected: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `no_expiry`<sup>Required</sup> <a name="no_expiry" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.noExpiry"></a>

```python
no_expiry: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `source_branch`<sup>Required</sup> <a name="source_branch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranch"></a>

```python
source_branch: str
```

- *Type:* str

---

##### `source_branch_lsn`<sup>Required</sup> <a name="source_branch_lsn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchLsn"></a>

```python
source_branch_lsn: str
```

- *Type:* str

---

##### `source_branch_time`<sup>Required</sup> <a name="source_branch_time" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.sourceBranchTime"></a>

```python
source_branch_time: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresBranchSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchSpec">DataDatabricksPostgresBranchSpec</a>

---


### DataDatabricksPostgresBranchStatusOutputReference <a name="DataDatabricksPostgresBranchStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_branch

dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.branchId">branch_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.currentState">current_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.default">default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.isProtected">is_protected</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.logicalSizeBytes">logical_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.pendingState">pending_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.purgeTime">purge_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranch">source_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranchLsn">source_branch_lsn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranchTime">source_branch_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.stateChangeTime">state_change_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatus">DataDatabricksPostgresBranchStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_id`<sup>Required</sup> <a name="branch_id" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.branchId"></a>

```python
branch_id: str
```

- *Type:* str

---

##### `current_state`<sup>Required</sup> <a name="current_state" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.currentState"></a>

```python
current_state: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.default"></a>

```python
default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `is_protected`<sup>Required</sup> <a name="is_protected" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.isProtected"></a>

```python
is_protected: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `logical_size_bytes`<sup>Required</sup> <a name="logical_size_bytes" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.logicalSizeBytes"></a>

```python
logical_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pending_state`<sup>Required</sup> <a name="pending_state" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.pendingState"></a>

```python
pending_state: str
```

- *Type:* str

---

##### `purge_time`<sup>Required</sup> <a name="purge_time" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.purgeTime"></a>

```python
purge_time: str
```

- *Type:* str

---

##### `source_branch`<sup>Required</sup> <a name="source_branch" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranch"></a>

```python
source_branch: str
```

- *Type:* str

---

##### `source_branch_lsn`<sup>Required</sup> <a name="source_branch_lsn" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranchLsn"></a>

```python
source_branch_lsn: str
```

- *Type:* str

---

##### `source_branch_time`<sup>Required</sup> <a name="source_branch_time" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.sourceBranchTime"></a>

```python
source_branch_time: str
```

- *Type:* str

---

##### `state_change_time`<sup>Required</sup> <a name="state_change_time" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.stateChangeTime"></a>

```python
state_change_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresBranchStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresBranch.DataDatabricksPostgresBranchStatus">DataDatabricksPostgresBranchStatus</a>

---



