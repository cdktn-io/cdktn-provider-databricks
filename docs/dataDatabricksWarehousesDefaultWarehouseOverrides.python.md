# `dataDatabricksWarehousesDefaultWarehouseOverrides` Submodule <a name="`dataDatabricksWarehousesDefaultWarehouseOverrides` Submodule" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWarehousesDefaultWarehouseOverrides <a name="DataDatabricksWarehousesDefaultWarehouseOverrides" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides databricks_warehouses_default_warehouse_overrides}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_warehouses_default_warehouse_overrides

dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides(
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
  provider_config: DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#page_size DataDatabricksWarehousesDefaultWarehouseOverrides#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#page_size DataDatabricksWarehousesDefaultWarehouseOverrides#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksWarehousesDefaultWarehouseOverrides resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_warehouses_default_warehouse_overrides

dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_warehouses_default_warehouse_overrides

dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_warehouses_default_warehouse_overrides

dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_warehouses_default_warehouse_overrides

dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksWarehousesDefaultWarehouseOverrides resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksWarehousesDefaultWarehouseOverrides to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksWarehousesDefaultWarehouseOverrides that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWarehousesDefaultWarehouseOverrides to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.defaultWarehouseOverrides">default_warehouse_overrides</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `default_warehouse_overrides`<sup>Required</sup> <a name="default_warehouse_overrides" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.defaultWarehouseOverrides"></a>

```python
default_warehouse_overrides: DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.providerConfig"></a>

```python
provider_config: DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a>

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverrides.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWarehousesDefaultWarehouseOverridesConfig <a name="DataDatabricksWarehousesDefaultWarehouseOverridesConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_warehouses_default_warehouse_overrides

dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#page_size DataDatabricksWarehousesDefaultWarehouseOverrides#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#page_size DataDatabricksWarehousesDefaultWarehouseOverrides#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}.

---

### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_warehouses_default_warehouse_overrides

dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides(
  name: str,
  provider_config: DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#name DataDatabricksWarehousesDefaultWarehouseOverrides#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#name DataDatabricksWarehousesDefaultWarehouseOverrides#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides.property.providerConfig"></a>

```python
provider_config: DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#provider_config DataDatabricksWarehousesDefaultWarehouseOverrides#provider_config}.

---

### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_warehouses_default_warehouse_overrides

dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}.

---

### DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig <a name="DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_warehouses_default_warehouse_overrides

dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_warehouses_default_warehouse_overrides

dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides</a>]

---


### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_warehouses_default_warehouse_overrides

dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/data-sources/warehouses_default_warehouse_overrides#workspace_id DataDatabricksWarehousesDefaultWarehouseOverrides#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.defaultWarehouseOverrideId">default_warehouse_override_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_warehouse_override_id`<sup>Required</sup> <a name="default_warehouse_override_id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.defaultWarehouseOverrideId"></a>

```python
default_warehouse_override_id: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverrides</a>

---


### DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference <a name="DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_warehouses_default_warehouse_overrides

dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesDefaultWarehouseOverridesProviderConfig</a>

---


### DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference <a name="DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_warehouses_default_warehouse_overrides

dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksWarehousesDefaultWarehouseOverrides.DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig">DataDatabricksWarehousesDefaultWarehouseOverridesProviderConfig</a>

---



