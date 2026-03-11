# `dataDatabricksDbfsFilePaths` Submodule <a name="`dataDatabricksDbfsFilePaths` Submodule" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDbfsFilePaths <a name="DataDatabricksDbfsFilePaths" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths databricks_dbfs_file_paths}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_dbfs_file_paths

dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  path: str,
  recursive: bool | IResolvable,
  id: str = None,
  provider_config: DataDatabricksDbfsFilePathsProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths#path DataDatabricksDbfsFilePaths#path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.recursive">recursive</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths#recursive DataDatabricksDbfsFilePaths#recursive}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths#id DataDatabricksDbfsFilePaths#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfig">DataDatabricksDbfsFilePathsProviderConfig</a></code> | provider_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths#path DataDatabricksDbfsFilePaths#path}.

---

##### `recursive`<sup>Required</sup> <a name="recursive" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.recursive"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths#recursive DataDatabricksDbfsFilePaths#recursive}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths#id DataDatabricksDbfsFilePaths#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfig">DataDatabricksDbfsFilePathsProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths#provider_config DataDatabricksDbfsFilePaths#provider_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths#workspace_id DataDatabricksDbfsFilePaths#workspace_id}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksDbfsFilePaths resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_dbfs_file_paths

dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_dbfs_file_paths

dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_dbfs_file_paths

dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_dbfs_file_paths

dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksDbfsFilePaths resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksDbfsFilePaths to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksDbfsFilePaths that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksDbfsFilePaths to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.pathList">path_list</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList">DataDatabricksDbfsFilePathsPathListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference">DataDatabricksDbfsFilePathsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.providerConfigInput">provider_config_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfig">DataDatabricksDbfsFilePathsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.recursiveInput">recursive_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.recursive">recursive</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `path_list`<sup>Required</sup> <a name="path_list" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.pathList"></a>

```python
path_list: DataDatabricksDbfsFilePathsPathListStructList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList">DataDatabricksDbfsFilePathsPathListStructList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.providerConfig"></a>

```python
provider_config: DataDatabricksDbfsFilePathsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference">DataDatabricksDbfsFilePathsProviderConfigOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.providerConfigInput"></a>

```python
provider_config_input: DataDatabricksDbfsFilePathsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfig">DataDatabricksDbfsFilePathsProviderConfig</a>

---

##### `recursive_input`<sup>Optional</sup> <a name="recursive_input" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.recursiveInput"></a>

```python
recursive_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `recursive`<sup>Required</sup> <a name="recursive" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.recursive"></a>

```python
recursive: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePaths.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDbfsFilePathsConfig <a name="DataDatabricksDbfsFilePathsConfig" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_dbfs_file_paths

dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  path: str,
  recursive: bool | IResolvable,
  id: str = None,
  provider_config: DataDatabricksDbfsFilePathsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths#path DataDatabricksDbfsFilePaths#path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.recursive">recursive</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths#recursive DataDatabricksDbfsFilePaths#recursive}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths#id DataDatabricksDbfsFilePaths#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfig">DataDatabricksDbfsFilePathsProviderConfig</a></code> | provider_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths#path DataDatabricksDbfsFilePaths#path}.

---

##### `recursive`<sup>Required</sup> <a name="recursive" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.recursive"></a>

```python
recursive: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths#recursive DataDatabricksDbfsFilePaths#recursive}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths#id DataDatabricksDbfsFilePaths#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksDbfsFilePathsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfig">DataDatabricksDbfsFilePathsProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths#provider_config DataDatabricksDbfsFilePaths#provider_config}

---

### DataDatabricksDbfsFilePathsPathListStruct <a name="DataDatabricksDbfsFilePathsPathListStruct" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStruct.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_dbfs_file_paths

dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStruct()
```


### DataDatabricksDbfsFilePathsProviderConfig <a name="DataDatabricksDbfsFilePathsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_dbfs_file_paths

dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfig(
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths#workspace_id DataDatabricksDbfsFilePaths#workspace_id}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.111.0/docs/data-sources/dbfs_file_paths#workspace_id DataDatabricksDbfsFilePaths#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDbfsFilePathsPathListStructList <a name="DataDatabricksDbfsFilePathsPathListStructList" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_dbfs_file_paths

dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDbfsFilePathsPathListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataDatabricksDbfsFilePathsPathListStructOutputReference <a name="DataDatabricksDbfsFilePathsPathListStructOutputReference" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_dbfs_file_paths

dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.fileSize">file_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStruct">DataDatabricksDbfsFilePathsPathListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_size`<sup>Required</sup> <a name="file_size" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.fileSize"></a>

```python
file_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDbfsFilePathsPathListStruct
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsPathListStruct">DataDatabricksDbfsFilePathsPathListStruct</a>

---


### DataDatabricksDbfsFilePathsProviderConfigOutputReference <a name="DataDatabricksDbfsFilePathsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_dbfs_file_paths

dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfig">DataDatabricksDbfsFilePathsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDbfsFilePathsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksDbfsFilePaths.DataDatabricksDbfsFilePathsProviderConfig">DataDatabricksDbfsFilePathsProviderConfig</a>

---



