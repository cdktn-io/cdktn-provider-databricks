# `dataDatabricksMasonManagedMemoryEntries` Submodule <a name="`dataDatabricksMasonManagedMemoryEntries` Submodule" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMasonManagedMemoryEntries <a name="DataDatabricksMasonManagedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries databricks_mason_managed_memory_entries}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_entries

dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actor_id: str,
  parent: str,
  page_size: typing.Union[int, float] = None,
  path_prefix: str = None,
  provider_config: DataDatabricksMasonManagedMemoryEntriesProviderConfig = None,
  read_mask: str = None,
  session_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.actorId">actor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#actor_id DataDatabricksMasonManagedMemoryEntries#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#parent DataDatabricksMasonManagedMemoryEntries#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#page_size DataDatabricksMasonManagedMemoryEntries#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.pathPrefix">path_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#path_prefix DataDatabricksMasonManagedMemoryEntries#path_prefix}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.readMask">read_mask</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#read_mask DataDatabricksMasonManagedMemoryEntries#read_mask}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.sessionId">session_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#session_id DataDatabricksMasonManagedMemoryEntries#session_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actor_id`<sup>Required</sup> <a name="actor_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.actorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#actor_id DataDatabricksMasonManagedMemoryEntries#actor_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#parent DataDatabricksMasonManagedMemoryEntries#parent}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#page_size DataDatabricksMasonManagedMemoryEntries#page_size}.

---

##### `path_prefix`<sup>Optional</sup> <a name="path_prefix" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.pathPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#path_prefix DataDatabricksMasonManagedMemoryEntries#path_prefix}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}.

---

##### `read_mask`<sup>Optional</sup> <a name="read_mask" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.readMask"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#read_mask DataDatabricksMasonManagedMemoryEntries#read_mask}.

---

##### `session_id`<sup>Optional</sup> <a name="session_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.Initializer.parameter.sessionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#session_id DataDatabricksMasonManagedMemoryEntries#session_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetPathPrefix">reset_path_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetReadMask">reset_read_mask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetSessionId">reset_session_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#workspace_id DataDatabricksMasonManagedMemoryEntries#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_path_prefix` <a name="reset_path_prefix" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetPathPrefix"></a>

```python
def reset_path_prefix() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_read_mask` <a name="reset_read_mask" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetReadMask"></a>

```python
def reset_read_mask() -> None
```

##### `reset_session_id` <a name="reset_session_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.resetSessionId"></a>

```python
def reset_session_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryEntries resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_entries

dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_entries

dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_entries

dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_entries

dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryEntries resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksMasonManagedMemoryEntries to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksMasonManagedMemoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMasonManagedMemoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.managedMemoryEntries">managed_memory_entries</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.actorIdInput">actor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pathPrefixInput">path_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.readMaskInput">read_mask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.sessionIdInput">session_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.actorId">actor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pathPrefix">path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.readMask">read_mask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.sessionId">session_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `managed_memory_entries`<sup>Required</sup> <a name="managed_memory_entries" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.managedMemoryEntries"></a>

```python
managed_memory_entries: DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.providerConfig"></a>

```python
provider_config: DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference</a>

---

##### `actor_id_input`<sup>Optional</sup> <a name="actor_id_input" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.actorIdInput"></a>

```python
actor_id_input: str
```

- *Type:* str

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `path_prefix_input`<sup>Optional</sup> <a name="path_prefix_input" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pathPrefixInput"></a>

```python
path_prefix_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksMasonManagedMemoryEntriesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a>

---

##### `read_mask_input`<sup>Optional</sup> <a name="read_mask_input" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.readMaskInput"></a>

```python
read_mask_input: str
```

- *Type:* str

---

##### `session_id_input`<sup>Optional</sup> <a name="session_id_input" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.sessionIdInput"></a>

```python
session_id_input: str
```

- *Type:* str

---

##### `actor_id`<sup>Required</sup> <a name="actor_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.actorId"></a>

```python
actor_id: str
```

- *Type:* str

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `path_prefix`<sup>Required</sup> <a name="path_prefix" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.pathPrefix"></a>

```python
path_prefix: str
```

- *Type:* str

---

##### `read_mask`<sup>Required</sup> <a name="read_mask" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.readMask"></a>

```python
read_mask: str
```

- *Type:* str

---

##### `session_id`<sup>Required</sup> <a name="session_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.sessionId"></a>

```python
session_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntries.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMasonManagedMemoryEntriesConfig <a name="DataDatabricksMasonManagedMemoryEntriesConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_entries

dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  actor_id: str,
  parent: str,
  page_size: typing.Union[int, float] = None,
  path_prefix: str = None,
  provider_config: DataDatabricksMasonManagedMemoryEntriesProviderConfig = None,
  read_mask: str = None,
  session_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.actorId">actor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#actor_id DataDatabricksMasonManagedMemoryEntries#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#parent DataDatabricksMasonManagedMemoryEntries#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#page_size DataDatabricksMasonManagedMemoryEntries#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.pathPrefix">path_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#path_prefix DataDatabricksMasonManagedMemoryEntries#path_prefix}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.readMask">read_mask</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#read_mask DataDatabricksMasonManagedMemoryEntries#read_mask}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.sessionId">session_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#session_id DataDatabricksMasonManagedMemoryEntries#session_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actor_id`<sup>Required</sup> <a name="actor_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.actorId"></a>

```python
actor_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#actor_id DataDatabricksMasonManagedMemoryEntries#actor_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#parent DataDatabricksMasonManagedMemoryEntries#parent}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#page_size DataDatabricksMasonManagedMemoryEntries#page_size}.

---

##### `path_prefix`<sup>Optional</sup> <a name="path_prefix" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.pathPrefix"></a>

```python
path_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#path_prefix DataDatabricksMasonManagedMemoryEntries#path_prefix}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksMasonManagedMemoryEntriesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}.

---

##### `read_mask`<sup>Optional</sup> <a name="read_mask" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.readMask"></a>

```python
read_mask: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#read_mask DataDatabricksMasonManagedMemoryEntries#read_mask}.

---

##### `session_id`<sup>Optional</sup> <a name="session_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesConfig.property.sessionId"></a>

```python
session_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#session_id DataDatabricksMasonManagedMemoryEntries#session_id}.

---

### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_entries

dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries(
  name: str,
  provider_config: DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#name DataDatabricksMasonManagedMemoryEntries#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#name DataDatabricksMasonManagedMemoryEntries#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries.property.providerConfig"></a>

```python
provider_config: DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#provider_config DataDatabricksMasonManagedMemoryEntries#provider_config}.

---

### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_entries

dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#workspace_id DataDatabricksMasonManagedMemoryEntries#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#workspace_id DataDatabricksMasonManagedMemoryEntries#workspace_id}.

---

### DataDatabricksMasonManagedMemoryEntriesProviderConfig <a name="DataDatabricksMasonManagedMemoryEntriesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_entries

dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#workspace_id DataDatabricksMasonManagedMemoryEntries#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#workspace_id DataDatabricksMasonManagedMemoryEntries#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_entries

dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries</a>]

---


### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_entries

dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_entries#workspace_id DataDatabricksMasonManagedMemoryEntries#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.actorId">actor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sessionId">session_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actor_id`<sup>Required</sup> <a name="actor_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.actorId"></a>

```python
actor_id: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference</a>

---

##### `session_id`<sup>Required</sup> <a name="session_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sessionId"></a>

```python
session_id: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntries</a>

---


### DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference <a name="DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_entries

dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

---


### DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference <a name="DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_mason_managed_memory_entries

dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksMasonManagedMemoryEntriesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryEntries.DataDatabricksMasonManagedMemoryEntriesProviderConfig">DataDatabricksMasonManagedMemoryEntriesProviderConfig</a>

---



