# `dataDatabricksAgentKitManagedMemoryEntries` Submodule <a name="`dataDatabricksAgentKitManagedMemoryEntries` Submodule" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAgentKitManagedMemoryEntries <a name="DataDatabricksAgentKitManagedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries databricks_agent_kit_managed_memory_entries}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_entries

dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries(
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
  provider_config: DataDatabricksAgentKitManagedMemoryEntriesProviderConfig = None,
  session_id: str = None,
  view: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.actorId">actor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#actor_id DataDatabricksAgentKitManagedMemoryEntries#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#parent DataDatabricksAgentKitManagedMemoryEntries#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#page_size DataDatabricksAgentKitManagedMemoryEntries#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.pathPrefix">path_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#path_prefix DataDatabricksAgentKitManagedMemoryEntries#path_prefix}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#provider_config DataDatabricksAgentKitManagedMemoryEntries#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.sessionId">session_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#session_id DataDatabricksAgentKitManagedMemoryEntries#session_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#view DataDatabricksAgentKitManagedMemoryEntries#view}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actor_id`<sup>Required</sup> <a name="actor_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.actorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#actor_id DataDatabricksAgentKitManagedMemoryEntries#actor_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#parent DataDatabricksAgentKitManagedMemoryEntries#parent}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#page_size DataDatabricksAgentKitManagedMemoryEntries#page_size}.

---

##### `path_prefix`<sup>Optional</sup> <a name="path_prefix" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.pathPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#path_prefix DataDatabricksAgentKitManagedMemoryEntries#path_prefix}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#provider_config DataDatabricksAgentKitManagedMemoryEntries#provider_config}.

---

##### `session_id`<sup>Optional</sup> <a name="session_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.sessionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#session_id DataDatabricksAgentKitManagedMemoryEntries#session_id}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.Initializer.parameter.view"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#view DataDatabricksAgentKitManagedMemoryEntries#view}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetPathPrefix">reset_path_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetSessionId">reset_session_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetView">reset_view</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#workspace_id DataDatabricksAgentKitManagedMemoryEntries#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_path_prefix` <a name="reset_path_prefix" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetPathPrefix"></a>

```python
def reset_path_prefix() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_session_id` <a name="reset_session_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetSessionId"></a>

```python
def reset_session_id() -> None
```

##### `reset_view` <a name="reset_view" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.resetView"></a>

```python
def reset_view() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksAgentKitManagedMemoryEntries resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_entries

dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_entries

dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_entries

dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_entries

dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksAgentKitManagedMemoryEntries resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAgentKitManagedMemoryEntries to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAgentKitManagedMemoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAgentKitManagedMemoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.managedMemoryEntries">managed_memory_entries</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.actorIdInput">actor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pathPrefixInput">path_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.sessionIdInput">session_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.viewInput">view_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.actorId">actor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pathPrefix">path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.sessionId">session_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.view">view</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `managed_memory_entries`<sup>Required</sup> <a name="managed_memory_entries" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.managedMemoryEntries"></a>

```python
managed_memory_entries: DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.providerConfig"></a>

```python
provider_config: DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference</a>

---

##### `actor_id_input`<sup>Optional</sup> <a name="actor_id_input" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.actorIdInput"></a>

```python
actor_id_input: str
```

- *Type:* str

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `path_prefix_input`<sup>Optional</sup> <a name="path_prefix_input" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pathPrefixInput"></a>

```python
path_prefix_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAgentKitManagedMemoryEntriesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesProviderConfig</a>

---

##### `session_id_input`<sup>Optional</sup> <a name="session_id_input" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.sessionIdInput"></a>

```python
session_id_input: str
```

- *Type:* str

---

##### `view_input`<sup>Optional</sup> <a name="view_input" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.viewInput"></a>

```python
view_input: str
```

- *Type:* str

---

##### `actor_id`<sup>Required</sup> <a name="actor_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.actorId"></a>

```python
actor_id: str
```

- *Type:* str

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `path_prefix`<sup>Required</sup> <a name="path_prefix" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.pathPrefix"></a>

```python
path_prefix: str
```

- *Type:* str

---

##### `session_id`<sup>Required</sup> <a name="session_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.sessionId"></a>

```python
session_id: str
```

- *Type:* str

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.view"></a>

```python
view: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntries.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAgentKitManagedMemoryEntriesConfig <a name="DataDatabricksAgentKitManagedMemoryEntriesConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_entries

dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig(
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
  provider_config: DataDatabricksAgentKitManagedMemoryEntriesProviderConfig = None,
  session_id: str = None,
  view: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.actorId">actor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#actor_id DataDatabricksAgentKitManagedMemoryEntries#actor_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#parent DataDatabricksAgentKitManagedMemoryEntries#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#page_size DataDatabricksAgentKitManagedMemoryEntries#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.pathPrefix">path_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#path_prefix DataDatabricksAgentKitManagedMemoryEntries#path_prefix}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#provider_config DataDatabricksAgentKitManagedMemoryEntries#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.sessionId">session_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#session_id DataDatabricksAgentKitManagedMemoryEntries#session_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#view DataDatabricksAgentKitManagedMemoryEntries#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actor_id`<sup>Required</sup> <a name="actor_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.actorId"></a>

```python
actor_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#actor_id DataDatabricksAgentKitManagedMemoryEntries#actor_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#parent DataDatabricksAgentKitManagedMemoryEntries#parent}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#page_size DataDatabricksAgentKitManagedMemoryEntries#page_size}.

---

##### `path_prefix`<sup>Optional</sup> <a name="path_prefix" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.pathPrefix"></a>

```python
path_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#path_prefix DataDatabricksAgentKitManagedMemoryEntries#path_prefix}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksAgentKitManagedMemoryEntriesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#provider_config DataDatabricksAgentKitManagedMemoryEntries#provider_config}.

---

##### `session_id`<sup>Optional</sup> <a name="session_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.sessionId"></a>

```python
session_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#session_id DataDatabricksAgentKitManagedMemoryEntries#session_id}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesConfig.property.view"></a>

```python
view: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#view DataDatabricksAgentKitManagedMemoryEntries#view}.

---

### DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries <a name="DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_entries

dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries(
  name: str,
  provider_config: DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#name DataDatabricksAgentKitManagedMemoryEntries#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#provider_config DataDatabricksAgentKitManagedMemoryEntries#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#name DataDatabricksAgentKitManagedMemoryEntries#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries.property.providerConfig"></a>

```python
provider_config: DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#provider_config DataDatabricksAgentKitManagedMemoryEntries#provider_config}.

---

### DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig <a name="DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_entries

dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#workspace_id DataDatabricksAgentKitManagedMemoryEntries#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#workspace_id DataDatabricksAgentKitManagedMemoryEntries#workspace_id}.

---

### DataDatabricksAgentKitManagedMemoryEntriesProviderConfig <a name="DataDatabricksAgentKitManagedMemoryEntriesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_entries

dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#workspace_id DataDatabricksAgentKitManagedMemoryEntries#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#workspace_id DataDatabricksAgentKitManagedMemoryEntries#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList <a name="DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_entries

dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries</a>]

---


### DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference <a name="DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_entries

dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_entries#workspace_id DataDatabricksAgentKitManagedMemoryEntries#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.actorId">actor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sessionId">session_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actor_id`<sup>Required</sup> <a name="actor_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.actorId"></a>

```python
actor_id: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference</a>

---

##### `session_id`<sup>Required</sup> <a name="session_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sessionId"></a>

```python
session_id: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntries</a>

---


### DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference <a name="DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_entries

dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesManagedMemoryEntriesProviderConfig</a>

---


### DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference <a name="DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_entries

dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAgentKitManagedMemoryEntriesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryEntries.DataDatabricksAgentKitManagedMemoryEntriesProviderConfig">DataDatabricksAgentKitManagedMemoryEntriesProviderConfig</a>

---



