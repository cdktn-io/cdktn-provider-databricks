# `dataDatabricksAgentKitManagedMemoryStores` Submodule <a name="`dataDatabricksAgentKitManagedMemoryStores` Submodule" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAgentKitManagedMemoryStores <a name="DataDatabricksAgentKitManagedMemoryStores" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores databricks_agent_kit_managed_memory_stores}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_stores

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores(
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
  provider_config: DataDatabricksAgentKitManagedMemoryStoresProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#page_size DataDatabricksAgentKitManagedMemoryStores#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#provider_config DataDatabricksAgentKitManagedMemoryStores#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#page_size DataDatabricksAgentKitManagedMemoryStores#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#provider_config DataDatabricksAgentKitManagedMemoryStores#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#workspace_id DataDatabricksAgentKitManagedMemoryStores#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksAgentKitManagedMemoryStores resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_stores

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_stores

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_stores

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_stores

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksAgentKitManagedMemoryStores resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAgentKitManagedMemoryStores to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAgentKitManagedMemoryStores that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAgentKitManagedMemoryStores to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.managedMemoryStores">managed_memory_stores</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `managed_memory_stores`<sup>Required</sup> <a name="managed_memory_stores" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.managedMemoryStores"></a>

```python
managed_memory_stores: DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.providerConfig"></a>

```python
provider_config: DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAgentKitManagedMemoryStoresProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresProviderConfig</a>

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStores.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAgentKitManagedMemoryStoresConfig <a name="DataDatabricksAgentKitManagedMemoryStoresConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_stores

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksAgentKitManagedMemoryStoresProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#page_size DataDatabricksAgentKitManagedMemoryStores#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#provider_config DataDatabricksAgentKitManagedMemoryStores#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#page_size DataDatabricksAgentKitManagedMemoryStores#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksAgentKitManagedMemoryStoresProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#provider_config DataDatabricksAgentKitManagedMemoryStores#provider_config}.

---

### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_stores

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores(
  name: str,
  provider_config: DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#name DataDatabricksAgentKitManagedMemoryStores#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#provider_config DataDatabricksAgentKitManagedMemoryStores#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#name DataDatabricksAgentKitManagedMemoryStores#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores.property.providerConfig"></a>

```python
provider_config: DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#provider_config DataDatabricksAgentKitManagedMemoryStores#provider_config}.

---

### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_stores

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#workspace_id DataDatabricksAgentKitManagedMemoryStores#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#workspace_id DataDatabricksAgentKitManagedMemoryStores#workspace_id}.

---

### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_stores

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend()
```


### DataDatabricksAgentKitManagedMemoryStoresProviderConfig <a name="DataDatabricksAgentKitManagedMemoryStoresProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_stores

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#workspace_id DataDatabricksAgentKitManagedMemoryStores#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#workspace_id DataDatabricksAgentKitManagedMemoryStores#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_stores

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores</a>]

---


### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_stores

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.140.0/docs/data-sources/agent_kit_managed_memory_stores#workspace_id DataDatabricksAgentKitManagedMemoryStores#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.creatorUserId">creator_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.ownerUserId">owner_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.storageBackend">storage_backend</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.workspaceId">workspace_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator_user_id`<sup>Required</sup> <a name="creator_user_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.creatorUserId"></a>

```python
creator_user_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `owner_user_id`<sup>Required</sup> <a name="owner_user_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.ownerUserId"></a>

```python
owner_user_id: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference</a>

---

##### `storage_backend`<sup>Required</sup> <a name="storage_backend" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.storageBackend"></a>

```python
storage_backend: DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.workspaceId"></a>

```python
workspace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStores</a>

---


### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_stores

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

---


### DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference <a name="DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_stores

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendId">backend_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendType">backend_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_id`<sup>Required</sup> <a name="backend_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendId"></a>

```python
backend_id: str
```

- *Type:* str

---

##### `backend_type`<sup>Required</sup> <a name="backend_type" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendType"></a>

```python
backend_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend">DataDatabricksAgentKitManagedMemoryStoresManagedMemoryStoresStorageBackend</a>

---


### DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference <a name="DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_agent_kit_managed_memory_stores

dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAgentKitManagedMemoryStoresProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAgentKitManagedMemoryStores.DataDatabricksAgentKitManagedMemoryStoresProviderConfig">DataDatabricksAgentKitManagedMemoryStoresProviderConfig</a>

---



