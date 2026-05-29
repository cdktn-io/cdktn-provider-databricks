# `dataDatabricksPostgresRoles` Submodule <a name="`dataDatabricksPostgresRoles` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresRoles <a name="DataDatabricksPostgresRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles databricks_postgres_roles}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRoles(
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
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksPostgresRolesProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#parent DataDatabricksPostgresRoles#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#page_size DataDatabricksPostgresRoles#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#parent DataDatabricksPostgresRoles#parent}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#page_size DataDatabricksPostgresRoles#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresRoles resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksPostgresRoles resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksPostgresRoles to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksPostgresRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference">DataDatabricksPostgresRolesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.roles">roles</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList">DataDatabricksPostgresRolesRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.providerConfig"></a>

```python
provider_config: DataDatabricksPostgresRolesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference">DataDatabricksPostgresRolesProviderConfigOutputReference</a>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.roles"></a>

```python
roles: DataDatabricksPostgresRolesRolesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList">DataDatabricksPostgresRolesRolesList</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksPostgresRolesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a>

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRoles.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresRolesConfig <a name="DataDatabricksPostgresRolesConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksPostgresRolesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#parent DataDatabricksPostgresRoles#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#page_size DataDatabricksPostgresRoles#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#parent DataDatabricksPostgresRoles#parent}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#page_size DataDatabricksPostgresRoles#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksPostgresRolesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}.

---

### DataDatabricksPostgresRolesProviderConfig <a name="DataDatabricksPostgresRolesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}.

---

### DataDatabricksPostgresRolesRoles <a name="DataDatabricksPostgresRolesRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles(
  name: str,
  provider_config: DataDatabricksPostgresRolesRolesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#name DataDatabricksPostgresRoles#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#name DataDatabricksPostgresRoles#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles.property.providerConfig"></a>

```python
provider_config: DataDatabricksPostgresRolesRolesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#provider_config DataDatabricksPostgresRoles#provider_config}.

---

### DataDatabricksPostgresRolesRolesProviderConfig <a name="DataDatabricksPostgresRolesRolesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}.

---

### DataDatabricksPostgresRolesRolesSpec <a name="DataDatabricksPostgresRolesRolesSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec(
  attributes: DataDatabricksPostgresRolesRolesSpecAttributes = None,
  auth_method: str = None,
  identity_type: str = None,
  membership_roles: typing.List[str] = None,
  postgres_role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#attributes DataDatabricksPostgresRoles#attributes}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.authMethod">auth_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#auth_method DataDatabricksPostgresRoles#auth_method}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.identityType">identity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#identity_type DataDatabricksPostgresRoles#identity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.membershipRoles">membership_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#membership_roles DataDatabricksPostgresRoles#membership_roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.postgresRole">postgres_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#postgres_role DataDatabricksPostgresRoles#postgres_role}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.attributes"></a>

```python
attributes: DataDatabricksPostgresRolesRolesSpecAttributes
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#attributes DataDatabricksPostgresRoles#attributes}.

---

##### `auth_method`<sup>Optional</sup> <a name="auth_method" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#auth_method DataDatabricksPostgresRoles#auth_method}.

---

##### `identity_type`<sup>Optional</sup> <a name="identity_type" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#identity_type DataDatabricksPostgresRoles#identity_type}.

---

##### `membership_roles`<sup>Optional</sup> <a name="membership_roles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.membershipRoles"></a>

```python
membership_roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#membership_roles DataDatabricksPostgresRoles#membership_roles}.

---

##### `postgres_role`<sup>Optional</sup> <a name="postgres_role" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec.property.postgresRole"></a>

```python
postgres_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#postgres_role DataDatabricksPostgresRoles#postgres_role}.

---

### DataDatabricksPostgresRolesRolesSpecAttributes <a name="DataDatabricksPostgresRolesRolesSpecAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes(
  bypassrls: bool | IResolvable = None,
  createdb: bool | IResolvable = None,
  createrole: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.bypassrls">bypassrls</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.createdb">createdb</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.createrole">createrole</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}. |

---

##### `bypassrls`<sup>Optional</sup> <a name="bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.bypassrls"></a>

```python
bypassrls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}.

---

##### `createdb`<sup>Optional</sup> <a name="createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.createdb"></a>

```python
createdb: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}.

---

##### `createrole`<sup>Optional</sup> <a name="createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes.property.createrole"></a>

```python
createrole: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}.

---

### DataDatabricksPostgresRolesRolesStatus <a name="DataDatabricksPostgresRolesRolesStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus(
  attributes: DataDatabricksPostgresRolesRolesStatusAttributes = None,
  auth_method: str = None,
  identity_type: str = None,
  membership_roles: typing.List[str] = None,
  postgres_role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#attributes DataDatabricksPostgresRoles#attributes}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.authMethod">auth_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#auth_method DataDatabricksPostgresRoles#auth_method}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.identityType">identity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#identity_type DataDatabricksPostgresRoles#identity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.membershipRoles">membership_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#membership_roles DataDatabricksPostgresRoles#membership_roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.postgresRole">postgres_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#postgres_role DataDatabricksPostgresRoles#postgres_role}. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.attributes"></a>

```python
attributes: DataDatabricksPostgresRolesRolesStatusAttributes
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#attributes DataDatabricksPostgresRoles#attributes}.

---

##### `auth_method`<sup>Optional</sup> <a name="auth_method" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#auth_method DataDatabricksPostgresRoles#auth_method}.

---

##### `identity_type`<sup>Optional</sup> <a name="identity_type" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#identity_type DataDatabricksPostgresRoles#identity_type}.

---

##### `membership_roles`<sup>Optional</sup> <a name="membership_roles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.membershipRoles"></a>

```python
membership_roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#membership_roles DataDatabricksPostgresRoles#membership_roles}.

---

##### `postgres_role`<sup>Optional</sup> <a name="postgres_role" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus.property.postgresRole"></a>

```python
postgres_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#postgres_role DataDatabricksPostgresRoles#postgres_role}.

---

### DataDatabricksPostgresRolesRolesStatusAttributes <a name="DataDatabricksPostgresRolesRolesStatusAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes(
  bypassrls: bool | IResolvable = None,
  createdb: bool | IResolvable = None,
  createrole: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.bypassrls">bypassrls</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.createdb">createdb</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.createrole">createrole</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}. |

---

##### `bypassrls`<sup>Optional</sup> <a name="bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.bypassrls"></a>

```python
bypassrls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}.

---

##### `createdb`<sup>Optional</sup> <a name="createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.createdb"></a>

```python
createdb: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}.

---

##### `createrole`<sup>Optional</sup> <a name="createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes.property.createrole"></a>

```python
createrole: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresRolesProviderConfigOutputReference <a name="DataDatabricksPostgresRolesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPostgresRolesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesProviderConfig">DataDatabricksPostgresRolesProviderConfig</a>

---


### DataDatabricksPostgresRolesRolesList <a name="DataDatabricksPostgresRolesRolesList" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksPostgresRolesRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles">DataDatabricksPostgresRolesRoles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksPostgresRolesRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles">DataDatabricksPostgresRolesRoles</a>]

---


### DataDatabricksPostgresRolesRolesOutputReference <a name="DataDatabricksPostgresRolesRolesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#workspace_id DataDatabricksPostgresRoles#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference">DataDatabricksPostgresRolesRolesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference">DataDatabricksPostgresRolesRolesSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference">DataDatabricksPostgresRolesRolesStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles">DataDatabricksPostgresRolesRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksPostgresRolesRolesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference">DataDatabricksPostgresRolesRolesProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.spec"></a>

```python
spec: DataDatabricksPostgresRolesRolesSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference">DataDatabricksPostgresRolesRolesSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.status"></a>

```python
status: DataDatabricksPostgresRolesRolesStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference">DataDatabricksPostgresRolesRolesStatusOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksPostgresRolesRolesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresRolesRoles
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRoles">DataDatabricksPostgresRolesRoles</a>

---


### DataDatabricksPostgresRolesRolesProviderConfigOutputReference <a name="DataDatabricksPostgresRolesRolesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPostgresRolesRolesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesProviderConfig">DataDatabricksPostgresRolesRolesProviderConfig</a>

---


### DataDatabricksPostgresRolesRolesSpecAttributesOutputReference <a name="DataDatabricksPostgresRolesRolesSpecAttributesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetBypassrls">reset_bypassrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetCreatedb">reset_createdb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetCreaterole">reset_createrole</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bypassrls` <a name="reset_bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetBypassrls"></a>

```python
def reset_bypassrls() -> None
```

##### `reset_createdb` <a name="reset_createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetCreatedb"></a>

```python
def reset_createdb() -> None
```

##### `reset_createrole` <a name="reset_createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.resetCreaterole"></a>

```python
def reset_createrole() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.bypassrlsInput">bypassrls_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createdbInput">createdb_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createroleInput">createrole_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.bypassrls">bypassrls</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createdb">createdb</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createrole">createrole</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bypassrls_input`<sup>Optional</sup> <a name="bypassrls_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.bypassrlsInput"></a>

```python
bypassrls_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `createdb_input`<sup>Optional</sup> <a name="createdb_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createdbInput"></a>

```python
createdb_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `createrole_input`<sup>Optional</sup> <a name="createrole_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createroleInput"></a>

```python
createrole_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bypassrls`<sup>Required</sup> <a name="bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.bypassrls"></a>

```python
bypassrls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `createdb`<sup>Required</sup> <a name="createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createdb"></a>

```python
createdb: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `createrole`<sup>Required</sup> <a name="createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.createrole"></a>

```python
createrole: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPostgresRolesRolesSpecAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a>

---


### DataDatabricksPostgresRolesRolesSpecOutputReference <a name="DataDatabricksPostgresRolesRolesSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetAuthMethod">reset_auth_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetIdentityType">reset_identity_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetMembershipRoles">reset_membership_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetPostgresRole">reset_postgres_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attributes` <a name="put_attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.putAttributes"></a>

```python
def put_attributes(
  bypassrls: bool | IResolvable = None,
  createdb: bool | IResolvable = None,
  createrole: bool | IResolvable = None
) -> None
```

###### `bypassrls`<sup>Optional</sup> <a name="bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.putAttributes.parameter.bypassrls"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}.

---

###### `createdb`<sup>Optional</sup> <a name="createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.putAttributes.parameter.createdb"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}.

---

###### `createrole`<sup>Optional</sup> <a name="createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.putAttributes.parameter.createrole"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}.

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_auth_method` <a name="reset_auth_method" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetAuthMethod"></a>

```python
def reset_auth_method() -> None
```

##### `reset_identity_type` <a name="reset_identity_type" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetIdentityType"></a>

```python
def reset_identity_type() -> None
```

##### `reset_membership_roles` <a name="reset_membership_roles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetMembershipRoles"></a>

```python
def reset_membership_roles() -> None
```

##### `reset_postgres_role` <a name="reset_postgres_role" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.resetPostgresRole"></a>

```python
def reset_postgres_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference">DataDatabricksPostgresRolesRolesSpecAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.attributesInput">attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.authMethodInput">auth_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.identityTypeInput">identity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.membershipRolesInput">membership_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.postgresRoleInput">postgres_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.authMethod">auth_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.identityType">identity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.membershipRoles">membership_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.postgresRole">postgres_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec">DataDatabricksPostgresRolesRolesSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.attributes"></a>

```python
attributes: DataDatabricksPostgresRolesRolesSpecAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributesOutputReference">DataDatabricksPostgresRolesRolesSpecAttributesOutputReference</a>

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.attributesInput"></a>

```python
attributes_input: IResolvable | DataDatabricksPostgresRolesRolesSpecAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecAttributes">DataDatabricksPostgresRolesRolesSpecAttributes</a>

---

##### `auth_method_input`<sup>Optional</sup> <a name="auth_method_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.authMethodInput"></a>

```python
auth_method_input: str
```

- *Type:* str

---

##### `identity_type_input`<sup>Optional</sup> <a name="identity_type_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.identityTypeInput"></a>

```python
identity_type_input: str
```

- *Type:* str

---

##### `membership_roles_input`<sup>Optional</sup> <a name="membership_roles_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.membershipRolesInput"></a>

```python
membership_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `postgres_role_input`<sup>Optional</sup> <a name="postgres_role_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.postgresRoleInput"></a>

```python
postgres_role_input: str
```

- *Type:* str

---

##### `auth_method`<sup>Required</sup> <a name="auth_method" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

---

##### `identity_type`<sup>Required</sup> <a name="identity_type" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

---

##### `membership_roles`<sup>Required</sup> <a name="membership_roles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.membershipRoles"></a>

```python
membership_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `postgres_role`<sup>Required</sup> <a name="postgres_role" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.postgresRole"></a>

```python
postgres_role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresRolesRolesSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesSpec">DataDatabricksPostgresRolesRolesSpec</a>

---


### DataDatabricksPostgresRolesRolesStatusAttributesOutputReference <a name="DataDatabricksPostgresRolesRolesStatusAttributesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetBypassrls">reset_bypassrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetCreatedb">reset_createdb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetCreaterole">reset_createrole</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bypassrls` <a name="reset_bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetBypassrls"></a>

```python
def reset_bypassrls() -> None
```

##### `reset_createdb` <a name="reset_createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetCreatedb"></a>

```python
def reset_createdb() -> None
```

##### `reset_createrole` <a name="reset_createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.resetCreaterole"></a>

```python
def reset_createrole() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.bypassrlsInput">bypassrls_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createdbInput">createdb_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createroleInput">createrole_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.bypassrls">bypassrls</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createdb">createdb</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createrole">createrole</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bypassrls_input`<sup>Optional</sup> <a name="bypassrls_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.bypassrlsInput"></a>

```python
bypassrls_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `createdb_input`<sup>Optional</sup> <a name="createdb_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createdbInput"></a>

```python
createdb_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `createrole_input`<sup>Optional</sup> <a name="createrole_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createroleInput"></a>

```python
createrole_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bypassrls`<sup>Required</sup> <a name="bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.bypassrls"></a>

```python
bypassrls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `createdb`<sup>Required</sup> <a name="createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createdb"></a>

```python
createdb: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `createrole`<sup>Required</sup> <a name="createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.createrole"></a>

```python
createrole: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPostgresRolesRolesStatusAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a>

---


### DataDatabricksPostgresRolesRolesStatusOutputReference <a name="DataDatabricksPostgresRolesRolesStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_postgres_roles

dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetAuthMethod">reset_auth_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetIdentityType">reset_identity_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetMembershipRoles">reset_membership_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetPostgresRole">reset_postgres_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attributes` <a name="put_attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.putAttributes"></a>

```python
def put_attributes(
  bypassrls: bool | IResolvable = None,
  createdb: bool | IResolvable = None,
  createrole: bool | IResolvable = None
) -> None
```

###### `bypassrls`<sup>Optional</sup> <a name="bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.putAttributes.parameter.bypassrls"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#bypassrls DataDatabricksPostgresRoles#bypassrls}.

---

###### `createdb`<sup>Optional</sup> <a name="createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.putAttributes.parameter.createdb"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#createdb DataDatabricksPostgresRoles#createdb}.

---

###### `createrole`<sup>Optional</sup> <a name="createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.putAttributes.parameter.createrole"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.116.0/docs/data-sources/postgres_roles#createrole DataDatabricksPostgresRoles#createrole}.

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_auth_method` <a name="reset_auth_method" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetAuthMethod"></a>

```python
def reset_auth_method() -> None
```

##### `reset_identity_type` <a name="reset_identity_type" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetIdentityType"></a>

```python
def reset_identity_type() -> None
```

##### `reset_membership_roles` <a name="reset_membership_roles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetMembershipRoles"></a>

```python
def reset_membership_roles() -> None
```

##### `reset_postgres_role` <a name="reset_postgres_role" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.resetPostgresRole"></a>

```python
def reset_postgres_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference">DataDatabricksPostgresRolesRolesStatusAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.attributesInput">attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.authMethodInput">auth_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.identityTypeInput">identity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.membershipRolesInput">membership_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.postgresRoleInput">postgres_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.authMethod">auth_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.identityType">identity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.membershipRoles">membership_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.postgresRole">postgres_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus">DataDatabricksPostgresRolesRolesStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.attributes"></a>

```python
attributes: DataDatabricksPostgresRolesRolesStatusAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributesOutputReference">DataDatabricksPostgresRolesRolesStatusAttributesOutputReference</a>

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.attributesInput"></a>

```python
attributes_input: IResolvable | DataDatabricksPostgresRolesRolesStatusAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusAttributes">DataDatabricksPostgresRolesRolesStatusAttributes</a>

---

##### `auth_method_input`<sup>Optional</sup> <a name="auth_method_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.authMethodInput"></a>

```python
auth_method_input: str
```

- *Type:* str

---

##### `identity_type_input`<sup>Optional</sup> <a name="identity_type_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.identityTypeInput"></a>

```python
identity_type_input: str
```

- *Type:* str

---

##### `membership_roles_input`<sup>Optional</sup> <a name="membership_roles_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.membershipRolesInput"></a>

```python
membership_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `postgres_role_input`<sup>Optional</sup> <a name="postgres_role_input" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.postgresRoleInput"></a>

```python
postgres_role_input: str
```

- *Type:* str

---

##### `auth_method`<sup>Required</sup> <a name="auth_method" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

---

##### `identity_type`<sup>Required</sup> <a name="identity_type" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

---

##### `membership_roles`<sup>Required</sup> <a name="membership_roles" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.membershipRoles"></a>

```python
membership_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `postgres_role`<sup>Required</sup> <a name="postgres_role" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.postgresRole"></a>

```python
postgres_role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPostgresRolesRolesStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRoles.DataDatabricksPostgresRolesRolesStatus">DataDatabricksPostgresRolesRolesStatus</a>

---



