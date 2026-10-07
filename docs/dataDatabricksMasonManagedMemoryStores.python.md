# `dataDatabricksMasonManagedMemoryStores` Submodule <a name="`dataDatabricksMasonManagedMemoryStores` Submodule" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMasonManagedMemoryStores <a name="DataDatabricksMasonManagedMemoryStores" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores databricks_mason_managed_memory_stores}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_stores

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksMasonManagedMemoryStoresProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#page_size DataDatabricksMasonManagedMemoryStores#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#provider_config DataDatabricksMasonManagedMemoryStores#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#page_size DataDatabricksMasonManagedMemoryStores#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#provider_config DataDatabricksMasonManagedMemoryStores#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#workspace_id DataDatabricksMasonManagedMemoryStores#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryStores resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_stores

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_stores

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_stores

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_stores

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryStores resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksMasonManagedMemoryStores to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksMasonManagedMemoryStores that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMasonManagedMemoryStores to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.managedMemoryStores">managed_memory_stores</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference">DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `managed_memory_stores`<sup>Required</sup> <a name="managed_memory_stores" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.managedMemoryStores"></a>

```python
managed_memory_stores: DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.providerConfig"></a>

```python
provider_config: DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference">DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksMasonManagedMemoryStoresProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a>

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMasonManagedMemoryStoresConfig <a name="DataDatabricksMasonManagedMemoryStoresConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_stores

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksMasonManagedMemoryStoresProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#page_size DataDatabricksMasonManagedMemoryStores#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#provider_config DataDatabricksMasonManagedMemoryStores#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#page_size DataDatabricksMasonManagedMemoryStores#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksMasonManagedMemoryStoresProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#provider_config DataDatabricksMasonManagedMemoryStores#provider_config}.

---

### DataDatabricksMasonManagedMemoryStoresManagedMemoryStores <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStores" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_stores

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores(
  name: str,
  provider_config: DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#name DataDatabricksMasonManagedMemoryStores#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#provider_config DataDatabricksMasonManagedMemoryStores#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#name DataDatabricksMasonManagedMemoryStores#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores.property.providerConfig"></a>

```python
provider_config: DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#provider_config DataDatabricksMasonManagedMemoryStores#provider_config}.

---

### DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_stores

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#workspace_id DataDatabricksMasonManagedMemoryStores#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#workspace_id DataDatabricksMasonManagedMemoryStores#workspace_id}.

---

### DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_stores

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend()
```


### DataDatabricksMasonManagedMemoryStoresProviderConfig <a name="DataDatabricksMasonManagedMemoryStoresProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_stores

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#workspace_id DataDatabricksMasonManagedMemoryStores#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#workspace_id DataDatabricksMasonManagedMemoryStores#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_stores

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores">DataDatabricksMasonManagedMemoryStoresManagedMemoryStores</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksMasonManagedMemoryStoresManagedMemoryStores]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores">DataDatabricksMasonManagedMemoryStoresManagedMemoryStores</a>]

---


### DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_stores

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#workspace_id DataDatabricksMasonManagedMemoryStores#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.creatorUserId">creator_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.ownerUserId">owner_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.storageBackend">storage_backend</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.workspaceId">workspace_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores">DataDatabricksMasonManagedMemoryStoresManagedMemoryStores</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator_user_id`<sup>Required</sup> <a name="creator_user_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.creatorUserId"></a>

```python
creator_user_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `owner_user_id`<sup>Required</sup> <a name="owner_user_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.ownerUserId"></a>

```python
owner_user_id: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference</a>

---

##### `storage_backend`<sup>Required</sup> <a name="storage_backend" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.storageBackend"></a>

```python
storage_backend: DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.workspaceId"></a>

```python
workspace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksMasonManagedMemoryStoresManagedMemoryStores
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores">DataDatabricksMasonManagedMemoryStoresManagedMemoryStores</a>

---


### DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_stores

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

---


### DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_stores

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendId">backend_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendType">backend_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_id`<sup>Required</sup> <a name="backend_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendId"></a>

```python
backend_id: str
```

- *Type:* str

---

##### `backend_type`<sup>Required</sup> <a name="backend_type" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendType"></a>

```python
backend_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend</a>

---


### DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference <a name="DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_stores

dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksMasonManagedMemoryStoresProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a>

---



