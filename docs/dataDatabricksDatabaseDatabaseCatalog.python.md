# `dataDatabricksDatabaseDatabaseCatalog` Submodule <a name="`dataDatabricksDatabaseDatabaseCatalog` Submodule" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseDatabaseCatalog <a name="DataDatabricksDatabaseDatabaseCatalog" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/database_database_catalog databricks_database_database_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_database_catalog

dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog(
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
  provider_config: DataDatabricksDatabaseDatabaseCatalogProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/database_database_catalog#name DataDatabricksDatabaseDatabaseCatalog#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig">DataDatabricksDatabaseDatabaseCatalogProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/database_database_catalog#provider_config DataDatabricksDatabaseDatabaseCatalog#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/database_database_catalog#name DataDatabricksDatabaseDatabaseCatalog#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig">DataDatabricksDatabaseDatabaseCatalogProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/database_database_catalog#provider_config DataDatabricksDatabaseDatabaseCatalog#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/database_database_catalog#workspace_id DataDatabricksDatabaseDatabaseCatalog#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksDatabaseDatabaseCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_database_database_catalog

dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_database_database_catalog

dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_database_database_catalog

dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_database_database_catalog

dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksDatabaseDatabaseCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksDatabaseDatabaseCatalog to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksDatabaseDatabaseCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/database_database_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseDatabaseCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.createDatabaseIfNotExists">create_database_if_not_exists</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.databaseInstanceName">database_instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference">DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig">DataDatabricksDatabaseDatabaseCatalogProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `create_database_if_not_exists`<sup>Required</sup> <a name="create_database_if_not_exists" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.createDatabaseIfNotExists"></a>

```python
create_database_if_not_exists: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `database_instance_name`<sup>Required</sup> <a name="database_instance_name" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.databaseInstanceName"></a>

```python
database_instance_name: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.providerConfig"></a>

```python
provider_config: DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference">DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksDatabaseDatabaseCatalogProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig">DataDatabricksDatabaseDatabaseCatalogProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseDatabaseCatalogConfig <a name="DataDatabricksDatabaseDatabaseCatalogConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_database_catalog

dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksDatabaseDatabaseCatalogProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/database_database_catalog#name DataDatabricksDatabaseDatabaseCatalog#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig">DataDatabricksDatabaseDatabaseCatalogProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/database_database_catalog#provider_config DataDatabricksDatabaseDatabaseCatalog#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/database_database_catalog#name DataDatabricksDatabaseDatabaseCatalog#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksDatabaseDatabaseCatalogProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig">DataDatabricksDatabaseDatabaseCatalogProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/database_database_catalog#provider_config DataDatabricksDatabaseDatabaseCatalog#provider_config}.

---

### DataDatabricksDatabaseDatabaseCatalogProviderConfig <a name="DataDatabricksDatabaseDatabaseCatalogProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_database_catalog

dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/database_database_catalog#workspace_id DataDatabricksDatabaseDatabaseCatalog#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/database_database_catalog#workspace_id DataDatabricksDatabaseDatabaseCatalog#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference <a name="DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_database_database_catalog

dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig">DataDatabricksDatabaseDatabaseCatalogProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksDatabaseDatabaseCatalogProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksDatabaseDatabaseCatalog.DataDatabricksDatabaseDatabaseCatalogProviderConfig">DataDatabricksDatabaseDatabaseCatalogProviderConfig</a>

---



