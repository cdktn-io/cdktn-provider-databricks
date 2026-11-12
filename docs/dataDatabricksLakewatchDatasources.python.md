# `dataDatabricksLakewatchDatasources` Submodule <a name="`dataDatabricksLakewatchDatasources` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchDatasources <a name="DataDatabricksLakewatchDatasources" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources databricks_lakewatch_datasources}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_name: str,
  filter: str = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksLakewatchDatasourcesProviderConfig = None,
  schema_name: str = None,
  view: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#filter DataDatabricksLakewatchDatasources#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#page_size DataDatabricksLakewatchDatasources#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#view DataDatabricksLakewatchDatasources#view}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.catalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#filter DataDatabricksLakewatchDatasources#filter}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#page_size DataDatabricksLakewatchDatasources#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.Initializer.parameter.view"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#view DataDatabricksLakewatchDatasources#view}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetSchemaName">reset_schema_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetView">reset_view</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

##### `reset_view` <a name="reset_view" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.resetView"></a>

```python
def reset_view() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchDatasources resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksLakewatchDatasources resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksLakewatchDatasources to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksLakewatchDatasources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchDatasources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.datasources">datasources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList">DataDatabricksLakewatchDatasourcesDatasourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference">DataDatabricksLakewatchDatasourcesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.viewInput">view_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.view">view</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `datasources`<sup>Required</sup> <a name="datasources" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.datasources"></a>

```python
datasources: DataDatabricksLakewatchDatasourcesDatasourcesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList">DataDatabricksLakewatchDatasourcesDatasourcesList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchDatasourcesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference">DataDatabricksLakewatchDatasourcesProviderConfigOutputReference</a>

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksLakewatchDatasourcesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a>

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `view_input`<sup>Optional</sup> <a name="view_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.viewInput"></a>

```python
view_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.view"></a>

```python
view: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasources.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchDatasourcesConfig <a name="DataDatabricksLakewatchDatasourcesConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_name: str,
  filter: str = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksLakewatchDatasourcesProviderConfig = None,
  schema_name: str = None,
  view: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#filter DataDatabricksLakewatchDatasources#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#page_size DataDatabricksLakewatchDatasources#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#view DataDatabricksLakewatchDatasources#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#filter DataDatabricksLakewatchDatasources#filter}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#page_size DataDatabricksLakewatchDatasources#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchDatasourcesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesConfig.property.view"></a>

```python
view: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#view DataDatabricksLakewatchDatasources#view}.

---

### DataDatabricksLakewatchDatasourcesDatasources <a name="DataDatabricksLakewatchDatasourcesDatasources" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources(
  name: str,
  provider_config: DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#name DataDatabricksLakewatchDatasources#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#name DataDatabricksLakewatchDatasources#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#provider_config DataDatabricksLakewatchDatasources#provider_config}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloader <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloader" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader(
  format: str,
  location: str,
  raw_table: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable,
  aws_secret_scope: str = None,
  envelope: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope = None,
  format_options: typing.Mapping[str] = None,
  include_existing_files: bool | IResolvable = None,
  override_partition_columns: typing.List[str] = None,
  queue_url: str = None,
  service_credentials: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#format DataDatabricksLakewatchDatasources#format}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#location DataDatabricksLakewatchDatasources#location}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.rawTable">raw_table</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#raw_table DataDatabricksLakewatchDatasources#raw_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.awsSecretScope">aws_secret_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#aws_secret_scope DataDatabricksLakewatchDatasources#aws_secret_scope}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.envelope">envelope</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#envelope DataDatabricksLakewatchDatasources#envelope}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.formatOptions">format_options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#format_options DataDatabricksLakewatchDatasources#format_options}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.includeExistingFiles">include_existing_files</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#include_existing_files DataDatabricksLakewatchDatasources#include_existing_files}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.overridePartitionColumns">override_partition_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#override_partition_columns DataDatabricksLakewatchDatasources#override_partition_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.queueUrl">queue_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#queue_url DataDatabricksLakewatchDatasources#queue_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.serviceCredentials">service_credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#service_credentials DataDatabricksLakewatchDatasources#service_credentials}. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#format DataDatabricksLakewatchDatasources#format}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#location DataDatabricksLakewatchDatasources#location}.

---

##### `raw_table`<sup>Required</sup> <a name="raw_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.rawTable"></a>

```python
raw_table: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#raw_table DataDatabricksLakewatchDatasources#raw_table}.

---

##### `aws_secret_scope`<sup>Optional</sup> <a name="aws_secret_scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.awsSecretScope"></a>

```python
aws_secret_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#aws_secret_scope DataDatabricksLakewatchDatasources#aws_secret_scope}.

---

##### `envelope`<sup>Optional</sup> <a name="envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.envelope"></a>

```python
envelope: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#envelope DataDatabricksLakewatchDatasources#envelope}.

---

##### `format_options`<sup>Optional</sup> <a name="format_options" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.formatOptions"></a>

```python
format_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#format_options DataDatabricksLakewatchDatasources#format_options}.

---

##### `include_existing_files`<sup>Optional</sup> <a name="include_existing_files" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.includeExistingFiles"></a>

```python
include_existing_files: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#include_existing_files DataDatabricksLakewatchDatasources#include_existing_files}.

---

##### `override_partition_columns`<sup>Optional</sup> <a name="override_partition_columns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.overridePartitionColumns"></a>

```python
override_partition_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#override_partition_columns DataDatabricksLakewatchDatasources#override_partition_columns}.

---

##### `queue_url`<sup>Optional</sup> <a name="queue_url" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#queue_url DataDatabricksLakewatchDatasources#queue_url}.

---

##### `service_credentials`<sup>Optional</sup> <a name="service_credentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader.property.serviceCredentials"></a>

```python
service_credentials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#service_credentials DataDatabricksLakewatchDatasources#service_credentials}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable(
  table_name: str,
  catalog_name: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope(
  cloud_watch_logs: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs = None,
  json_array: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.property.cloudWatchLogs">cloud_watch_logs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cloud_watch_logs DataDatabricksLakewatchDatasources#cloud_watch_logs}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.property.jsonArray">json_array</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#json_array DataDatabricksLakewatchDatasources#json_array}. |

---

##### `cloud_watch_logs`<sup>Optional</sup> <a name="cloud_watch_logs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.property.cloudWatchLogs"></a>

```python
cloud_watch_logs: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cloud_watch_logs DataDatabricksLakewatchDatasources#cloud_watch_logs}.

---

##### `json_array`<sup>Optional</sup> <a name="json_array" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope.property.jsonArray"></a>

```python
json_array: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#json_array DataDatabricksLakewatchDatasources#json_array}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs(
  header_retention: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs.property.headerRetention">header_retention</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#header_retention DataDatabricksLakewatchDatasources#header_retention}. |

---

##### `header_retention`<sup>Optional</sup> <a name="header_retention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs.property.headerRetention"></a>

```python
header_retention: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#header_retention DataDatabricksLakewatchDatasources#header_retention}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray(
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#path DataDatabricksLakewatchDatasources#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#path DataDatabricksLakewatchDatasources#path}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable(
  table_name: str,
  catalog_name: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy <a name="DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesExistingTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesExistingTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable(
  name: str,
  catalog: str = None,
  include_existing_rows: bool | IResolvable = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#name DataDatabricksLakewatchDatasources#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.catalog">catalog</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog DataDatabricksLakewatchDatasources#catalog}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.includeExistingRows">include_existing_rows</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#include_existing_rows DataDatabricksLakewatchDatasources#include_existing_rows}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.schema">schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema DataDatabricksLakewatchDatasources#schema}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#name DataDatabricksLakewatchDatasources#name}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog DataDatabricksLakewatchDatasources#catalog}.

---

##### `include_existing_rows`<sup>Optional</sup> <a name="include_existing_rows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.includeExistingRows"></a>

```python
include_existing_rows: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#include_existing_rows DataDatabricksLakewatchDatasources#include_existing_rows}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable.property.schema"></a>

```python
schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema DataDatabricksLakewatchDatasources#schema}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesOwner <a name="DataDatabricksLakewatchDatasourcesDatasourcesOwner" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesParsers <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers(
  id: str,
  version: str,
  target_table: DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#version DataDatabricksLakewatchDatasources#version}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.targetTable">target_table</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#target_table DataDatabricksLakewatchDatasources#target_table}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#version DataDatabricksLakewatchDatasources#version}.

---

##### `target_table`<sup>Optional</sup> <a name="target_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers.property.targetTable"></a>

```python
target_table: DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#target_table DataDatabricksLakewatchDatasources#target_table}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable(
  table_name: str,
  catalog_name: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable(
  table_name: str,
  catalog_name: str = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}. |

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig <a name="DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesSchedule <a name="DataDatabricksLakewatchDatasourcesDatasourcesSchedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule(
  at_least_every: str = None,
  compute_group: str = None,
  continuous: bool | IResolvable = None,
  cron_expression: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.atLeastEvery">at_least_every</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#at_least_every DataDatabricksLakewatchDatasources#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.computeGroup">compute_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#compute_group DataDatabricksLakewatchDatasources#compute_group}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.continuous">continuous</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#continuous DataDatabricksLakewatchDatasources#continuous}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.cronExpression">cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cron_expression DataDatabricksLakewatchDatasources#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#enabled DataDatabricksLakewatchDatasources#enabled}. |

---

##### `at_least_every`<sup>Optional</sup> <a name="at_least_every" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.atLeastEvery"></a>

```python
at_least_every: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#at_least_every DataDatabricksLakewatchDatasources#at_least_every}.

---

##### `compute_group`<sup>Optional</sup> <a name="compute_group" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.computeGroup"></a>

```python
compute_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#compute_group DataDatabricksLakewatchDatasources#compute_group}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.continuous"></a>

```python
continuous: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#continuous DataDatabricksLakewatchDatasources#continuous}.

---

##### `cron_expression`<sup>Optional</sup> <a name="cron_expression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cron_expression DataDatabricksLakewatchDatasources#cron_expression}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#enabled DataDatabricksLakewatchDatasources#enabled}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesStatus <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatus" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus()
```


### DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob()
```


### DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline()
```


### DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection <a name="DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection(
  connection_name: str,
  configuration: typing.Mapping[str] = None,
  start_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.connectionName">connection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#connection_name DataDatabricksLakewatchDatasources#connection_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#configuration DataDatabricksLakewatchDatasources#configuration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.startTime">start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#start_time DataDatabricksLakewatchDatasources#start_time}. |

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#connection_name DataDatabricksLakewatchDatasources#connection_name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#configuration DataDatabricksLakewatchDatasources#configuration}.

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#start_time DataDatabricksLakewatchDatasources#start_time}.

---

### DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy <a name="DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#display_name DataDatabricksLakewatchDatasources#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#email DataDatabricksLakewatchDatasources#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#id DataDatabricksLakewatchDatasources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#principal_type DataDatabricksLakewatchDatasources#principal_type}.

---

### DataDatabricksLakewatchDatasourcesProviderConfig <a name="DataDatabricksLakewatchDatasourcesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention">reset_header_retention</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header_retention` <a name="reset_header_retention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.resetHeaderRetention"></a>

```python
def reset_header_retention() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput">header_retention_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention">header_retention</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_retention_input`<sup>Optional</sup> <a name="header_retention_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetentionInput"></a>

```python
header_retention_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `header_retention`<sup>Required</sup> <a name="header_retention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.headerRetention"></a>

```python
header_retention: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putCloudWatchLogs">put_cloud_watch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putJsonArray">put_json_array</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resetCloudWatchLogs">reset_cloud_watch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resetJsonArray">reset_json_array</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_watch_logs` <a name="put_cloud_watch_logs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putCloudWatchLogs"></a>

```python
def put_cloud_watch_logs(
  header_retention: bool | IResolvable = None
) -> None
```

###### `header_retention`<sup>Optional</sup> <a name="header_retention" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putCloudWatchLogs.parameter.headerRetention"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#header_retention DataDatabricksLakewatchDatasources#header_retention}.

---

##### `put_json_array` <a name="put_json_array" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putJsonArray"></a>

```python
def put_json_array(
  path: str
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.putJsonArray.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#path DataDatabricksLakewatchDatasources#path}.

---

##### `reset_cloud_watch_logs` <a name="reset_cloud_watch_logs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resetCloudWatchLogs"></a>

```python
def reset_cloud_watch_logs() -> None
```

##### `reset_json_array` <a name="reset_json_array" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.resetJsonArray"></a>

```python
def reset_json_array() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.cloudWatchLogs">cloud_watch_logs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.jsonArray">json_array</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput">cloud_watch_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.jsonArrayInput">json_array_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_watch_logs`<sup>Required</sup> <a name="cloud_watch_logs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.cloudWatchLogs"></a>

```python
cloud_watch_logs: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogsOutputReference</a>

---

##### `json_array`<sup>Required</sup> <a name="json_array" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.jsonArray"></a>

```python
json_array: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArrayOutputReference</a>

---

##### `cloud_watch_logs_input`<sup>Optional</sup> <a name="cloud_watch_logs_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.cloudWatchLogsInput"></a>

```python
cloud_watch_logs_input: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a>

---

##### `json_array_input`<sup>Optional</sup> <a name="json_array_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.jsonArrayInput"></a>

```python
json_array_input: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putEnvelope">put_envelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putRawTable">put_raw_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetAwsSecretScope">reset_aws_secret_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetEnvelope">reset_envelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetFormatOptions">reset_format_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetIncludeExistingFiles">reset_include_existing_files</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetOverridePartitionColumns">reset_override_partition_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetQueueUrl">reset_queue_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetServiceCredentials">reset_service_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_envelope` <a name="put_envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putEnvelope"></a>

```python
def put_envelope(
  cloud_watch_logs: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs = None,
  json_array: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray = None
) -> None
```

###### `cloud_watch_logs`<sup>Optional</sup> <a name="cloud_watch_logs" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putEnvelope.parameter.cloudWatchLogs"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeCloudWatchLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#cloud_watch_logs DataDatabricksLakewatchDatasources#cloud_watch_logs}.

---

###### `json_array`<sup>Optional</sup> <a name="json_array" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putEnvelope.parameter.jsonArray"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeJsonArray</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#json_array DataDatabricksLakewatchDatasources#json_array}.

---

##### `put_raw_table` <a name="put_raw_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putRawTable"></a>

```python
def put_raw_table(
  table_name: str,
  catalog_name: str = None,
  schema_name: str = None
) -> None
```

###### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putRawTable.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}.

---

###### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putRawTable.parameter.catalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

###### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.putRawTable.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

##### `reset_aws_secret_scope` <a name="reset_aws_secret_scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetAwsSecretScope"></a>

```python
def reset_aws_secret_scope() -> None
```

##### `reset_envelope` <a name="reset_envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetEnvelope"></a>

```python
def reset_envelope() -> None
```

##### `reset_format_options` <a name="reset_format_options" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetFormatOptions"></a>

```python
def reset_format_options() -> None
```

##### `reset_include_existing_files` <a name="reset_include_existing_files" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetIncludeExistingFiles"></a>

```python
def reset_include_existing_files() -> None
```

##### `reset_override_partition_columns` <a name="reset_override_partition_columns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetOverridePartitionColumns"></a>

```python
def reset_override_partition_columns() -> None
```

##### `reset_queue_url` <a name="reset_queue_url" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetQueueUrl"></a>

```python
def reset_queue_url() -> None
```

##### `reset_service_credentials` <a name="reset_service_credentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.resetServiceCredentials"></a>

```python
def reset_service_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.effectiveIncludeExistingFiles">effective_include_existing_files</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.effectiveRawTable">effective_raw_table</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.envelope">envelope</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.rawTable">raw_table</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.awsSecretScopeInput">aws_secret_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.envelopeInput">envelope_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatOptionsInput">format_options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.includeExistingFilesInput">include_existing_files_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.overridePartitionColumnsInput">override_partition_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.queueUrlInput">queue_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.rawTableInput">raw_table_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.serviceCredentialsInput">service_credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.awsSecretScope">aws_secret_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatOptions">format_options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.includeExistingFiles">include_existing_files</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.overridePartitionColumns">override_partition_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.queueUrl">queue_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.serviceCredentials">service_credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader">DataDatabricksLakewatchDatasourcesDatasourcesAutoloader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_include_existing_files`<sup>Required</sup> <a name="effective_include_existing_files" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.effectiveIncludeExistingFiles"></a>

```python
effective_include_existing_files: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `effective_raw_table`<sup>Required</sup> <a name="effective_raw_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.effectiveRawTable"></a>

```python
effective_raw_table: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEffectiveRawTableOutputReference</a>

---

##### `envelope`<sup>Required</sup> <a name="envelope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.envelope"></a>

```python
envelope: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelopeOutputReference</a>

---

##### `raw_table`<sup>Required</sup> <a name="raw_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.rawTable"></a>

```python
raw_table: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference</a>

---

##### `aws_secret_scope_input`<sup>Optional</sup> <a name="aws_secret_scope_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.awsSecretScopeInput"></a>

```python
aws_secret_scope_input: str
```

- *Type:* str

---

##### `envelope_input`<sup>Optional</sup> <a name="envelope_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.envelopeInput"></a>

```python
envelope_input: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderEnvelope</a>

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `format_options_input`<sup>Optional</sup> <a name="format_options_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatOptionsInput"></a>

```python
format_options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `include_existing_files_input`<sup>Optional</sup> <a name="include_existing_files_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.includeExistingFilesInput"></a>

```python
include_existing_files_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `override_partition_columns_input`<sup>Optional</sup> <a name="override_partition_columns_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.overridePartitionColumnsInput"></a>

```python
override_partition_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `queue_url_input`<sup>Optional</sup> <a name="queue_url_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.queueUrlInput"></a>

```python
queue_url_input: str
```

- *Type:* str

---

##### `raw_table_input`<sup>Optional</sup> <a name="raw_table_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.rawTableInput"></a>

```python
raw_table_input: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a>

---

##### `service_credentials_input`<sup>Optional</sup> <a name="service_credentials_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.serviceCredentialsInput"></a>

```python
service_credentials_input: str
```

- *Type:* str

---

##### `aws_secret_scope`<sup>Required</sup> <a name="aws_secret_scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.awsSecretScope"></a>

```python
aws_secret_scope: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `format_options`<sup>Required</sup> <a name="format_options" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.formatOptions"></a>

```python
format_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `include_existing_files`<sup>Required</sup> <a name="include_existing_files" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.includeExistingFiles"></a>

```python
include_existing_files: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `override_partition_columns`<sup>Required</sup> <a name="override_partition_columns" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.overridePartitionColumns"></a>

```python
override_partition_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `queue_url`<sup>Required</sup> <a name="queue_url" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.queueUrl"></a>

```python
queue_url: str
```

- *Type:* str

---

##### `service_credentials`<sup>Required</sup> <a name="service_credentials" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.serviceCredentials"></a>

```python
service_credentials: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourcesDatasourcesAutoloader
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloader">DataDatabricksLakewatchDatasourcesDatasourcesAutoloader</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTableOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderRawTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy">DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy">DataDatabricksLakewatchDatasourcesDatasourcesCreatedBy</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetIncludeExistingRows">reset_include_existing_rows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_include_existing_rows` <a name="reset_include_existing_rows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetIncludeExistingRows"></a>

```python
def reset_include_existing_rows() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveCatalog">effective_catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveName">effective_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveSchema">effective_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.includeExistingRowsInput">include_existing_rows_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.includeExistingRows">include_existing_rows</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable">DataDatabricksLakewatchDatasourcesDatasourcesExistingTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_catalog`<sup>Required</sup> <a name="effective_catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveCatalog"></a>

```python
effective_catalog: str
```

- *Type:* str

---

##### `effective_name`<sup>Required</sup> <a name="effective_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveName"></a>

```python
effective_name: str
```

- *Type:* str

---

##### `effective_schema`<sup>Required</sup> <a name="effective_schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.effectiveSchema"></a>

```python
effective_schema: str
```

- *Type:* str

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `include_existing_rows_input`<sup>Optional</sup> <a name="include_existing_rows_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.includeExistingRowsInput"></a>

```python
include_existing_rows_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `include_existing_rows`<sup>Required</sup> <a name="include_existing_rows" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.includeExistingRows"></a>

```python
include_existing_rows: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourcesDatasourcesExistingTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTable">DataDatabricksLakewatchDatasourcesDatasourcesExistingTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesList <a name="DataDatabricksLakewatchDatasourcesDatasourcesList" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksLakewatchDatasourcesDatasourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources">DataDatabricksLakewatchDatasourcesDatasources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksLakewatchDatasourcesDatasources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources">DataDatabricksLakewatchDatasourcesDatasources</a>]

---


### DataDatabricksLakewatchDatasourcesDatasourcesOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#workspace_id DataDatabricksLakewatchDatasources#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.annotations">annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.autoloader">autoloader</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.computeMode">compute_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.computeWorkspaceId">compute_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.createdBy">created_by</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.datasourceId">datasource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.datasourceName">datasource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveCatalogName">effective_catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveDatasourceName">effective_datasource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveRunAsPrincipal">effective_run_as_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveSchemaName">effective_schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.existingTable">existing_table</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.owner">owner</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.parsers">parsers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList">DataDatabricksLakewatchDatasourcesDatasourcesParsersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.runAsPrincipal">run_as_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.unityCatalogConnection">unity_catalog_connection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.updatedBy">updated_by</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources">DataDatabricksLakewatchDatasourcesDatasources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.annotations"></a>

```python
annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `autoloader`<sup>Required</sup> <a name="autoloader" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.autoloader"></a>

```python
autoloader: DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesAutoloaderOutputReference</a>

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `compute_mode`<sup>Required</sup> <a name="compute_mode" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.computeMode"></a>

```python
compute_mode: str
```

- *Type:* str

---

##### `compute_workspace_id`<sup>Required</sup> <a name="compute_workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.computeWorkspaceId"></a>

```python
compute_workspace_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.createdBy"></a>

```python
created_by: DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesCreatedByOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `datasource_id`<sup>Required</sup> <a name="datasource_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.datasourceId"></a>

```python
datasource_id: str
```

- *Type:* str

---

##### `datasource_name`<sup>Required</sup> <a name="datasource_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.datasourceName"></a>

```python
datasource_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effective_catalog_name`<sup>Required</sup> <a name="effective_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveCatalogName"></a>

```python
effective_catalog_name: str
```

- *Type:* str

---

##### `effective_datasource_name`<sup>Required</sup> <a name="effective_datasource_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveDatasourceName"></a>

```python
effective_datasource_name: str
```

- *Type:* str

---

##### `effective_run_as_principal`<sup>Required</sup> <a name="effective_run_as_principal" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveRunAsPrincipal"></a>

```python
effective_run_as_principal: str
```

- *Type:* str

---

##### `effective_schema_name`<sup>Required</sup> <a name="effective_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.effectiveSchemaName"></a>

```python
effective_schema_name: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `existing_table`<sup>Required</sup> <a name="existing_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.existingTable"></a>

```python
existing_table: DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesExistingTableOutputReference</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.owner"></a>

```python
owner: DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference</a>

---

##### `parsers`<sup>Required</sup> <a name="parsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.parsers"></a>

```python
parsers: DataDatabricksLakewatchDatasourcesDatasourcesParsersList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList">DataDatabricksLakewatchDatasourcesDatasourcesParsersList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference</a>

---

##### `run_as_principal`<sup>Required</sup> <a name="run_as_principal" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.runAsPrincipal"></a>

```python
run_as_principal: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.schedule"></a>

```python
schedule: DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference</a>

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.status"></a>

```python
status: DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference</a>

---

##### `unity_catalog_connection`<sup>Required</sup> <a name="unity_catalog_connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.unityCatalogConnection"></a>

```python
unity_catalog_connection: DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference</a>

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.updatedBy"></a>

```python
updated_by: DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourcesDatasources
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasources">DataDatabricksLakewatchDatasourcesDatasources</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner">DataDatabricksLakewatchDatasourcesDatasourcesOwner</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwnerOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourcesDatasourcesOwner
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesOwner">DataDatabricksLakewatchDatasourcesDatasourcesOwner</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesParsersList <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersList" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers">DataDatabricksLakewatchDatasourcesDatasourcesParsers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksLakewatchDatasourcesDatasourcesParsers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers">DataDatabricksLakewatchDatasourcesDatasourcesParsers</a>]

---


### DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.putTargetTable">put_target_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resetTargetTable">reset_target_table</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_table` <a name="put_target_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.putTargetTable"></a>

```python
def put_target_table(
  table_name: str,
  catalog_name: str = None,
  schema_name: str = None
) -> None
```

###### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.putTargetTable.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#table_name DataDatabricksLakewatchDatasources#table_name}.

---

###### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.putTargetTable.parameter.catalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#catalog_name DataDatabricksLakewatchDatasources#catalog_name}.

---

###### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.putTargetTable.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_datasources#schema_name DataDatabricksLakewatchDatasources#schema_name}.

---

##### `reset_target_table` <a name="reset_target_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.resetTargetTable"></a>

```python
def reset_target_table() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.effectiveTargetTable">effective_target_table</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.targetTable">target_table</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.targetTableInput">target_table_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers">DataDatabricksLakewatchDatasourcesDatasourcesParsers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_target_table`<sup>Required</sup> <a name="effective_target_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.effectiveTargetTable"></a>

```python
effective_target_table: DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesParsersEffectiveTargetTableOutputReference</a>

---

##### `target_table`<sup>Required</sup> <a name="target_table" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.targetTable"></a>

```python
target_table: DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `target_table_input`<sup>Optional</sup> <a name="target_table_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.targetTableInput"></a>

```python
target_table_input: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourcesDatasourcesParsers
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsers">DataDatabricksLakewatchDatasourcesDatasourcesParsers</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable">DataDatabricksLakewatchDatasourcesDatasourcesParsersTargetTable</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesDatasourcesProviderConfig</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetAtLeastEvery">reset_at_least_every</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetComputeGroup">reset_compute_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetContinuous">reset_continuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetCronExpression">reset_cron_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_at_least_every` <a name="reset_at_least_every" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetAtLeastEvery"></a>

```python
def reset_at_least_every() -> None
```

##### `reset_compute_group` <a name="reset_compute_group" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetComputeGroup"></a>

```python
def reset_compute_group() -> None
```

##### `reset_continuous` <a name="reset_continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetContinuous"></a>

```python
def reset_continuous() -> None
```

##### `reset_cron_expression` <a name="reset_cron_expression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetCronExpression"></a>

```python
def reset_cron_expression() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.atLeastEveryInput">at_least_every_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.computeGroupInput">compute_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.continuousInput">continuous_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.cronExpressionInput">cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.atLeastEvery">at_least_every</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.computeGroup">compute_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.continuous">continuous</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule">DataDatabricksLakewatchDatasourcesDatasourcesSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `at_least_every_input`<sup>Optional</sup> <a name="at_least_every_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.atLeastEveryInput"></a>

```python
at_least_every_input: str
```

- *Type:* str

---

##### `compute_group_input`<sup>Optional</sup> <a name="compute_group_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.computeGroupInput"></a>

```python
compute_group_input: str
```

- *Type:* str

---

##### `continuous_input`<sup>Optional</sup> <a name="continuous_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.continuousInput"></a>

```python
continuous_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cron_expression_input`<sup>Optional</sup> <a name="cron_expression_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.cronExpressionInput"></a>

```python
cron_expression_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `at_least_every`<sup>Required</sup> <a name="at_least_every" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.atLeastEvery"></a>

```python
at_least_every: str
```

- *Type:* str

---

##### `compute_group`<sup>Required</sup> <a name="compute_group" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.computeGroup"></a>

```python
compute_group: str
```

- *Type:* str

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.continuous"></a>

```python
continuous: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourcesDatasourcesSchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesSchedule">DataDatabricksLakewatchDatasourcesDatasourcesSchedule</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastCompleteTime">last_complete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastErrorMessage">last_error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastStartTime">last_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastStatusChangeTime">last_status_change_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.runState">run_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `last_complete_time`<sup>Required</sup> <a name="last_complete_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastCompleteTime"></a>

```python
last_complete_time: str
```

- *Type:* str

---

##### `last_error_message`<sup>Required</sup> <a name="last_error_message" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastErrorMessage"></a>

```python
last_error_message: str
```

- *Type:* str

---

##### `last_start_time`<sup>Required</sup> <a name="last_start_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastStartTime"></a>

```python
last_start_time: str
```

- *Type:* str

---

##### `last_status_change_time`<sup>Required</sup> <a name="last_status_change_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lastStatusChangeTime"></a>

```python
last_status_change_time: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `run_state`<sup>Required</sup> <a name="run_state" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.runState"></a>

```python
run_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJob</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastCompleteTime">last_complete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastErrorMessage">last_error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastStartTime">last_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastStatusChangeTime">last_status_change_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.runState">run_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `last_complete_time`<sup>Required</sup> <a name="last_complete_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastCompleteTime"></a>

```python
last_complete_time: str
```

- *Type:* str

---

##### `last_error_message`<sup>Required</sup> <a name="last_error_message" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastErrorMessage"></a>

```python
last_error_message: str
```

- *Type:* str

---

##### `last_start_time`<sup>Required</sup> <a name="last_start_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastStartTime"></a>

```python
last_start_time: str
```

- *Type:* str

---

##### `last_status_change_time`<sup>Required</sup> <a name="last_status_change_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lastStatusChangeTime"></a>

```python
last_status_change_time: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `run_state`<sup>Required</sup> <a name="run_state" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.runState"></a>

```python
run_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipeline</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.ingestionJob">ingestion_job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.ingestionPipeline">ingestion_pipeline</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus">DataDatabricksLakewatchDatasourcesDatasourcesStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingestion_job`<sup>Required</sup> <a name="ingestion_job" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.ingestionJob"></a>

```python
ingestion_job: DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionJobOutputReference</a>

---

##### `ingestion_pipeline`<sup>Required</sup> <a name="ingestion_pipeline" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.ingestionPipeline"></a>

```python
ingestion_pipeline: DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference">DataDatabricksLakewatchDatasourcesDatasourcesStatusIngestionPipelineOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourcesDatasourcesStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesStatus">DataDatabricksLakewatchDatasourcesDatasourcesStatus</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connector">connector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.effectiveStartTime">effective_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.configurationInput">configuration_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.configuration">configuration</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection">DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connector"></a>

```python
connector: str
```

- *Type:* str

---

##### `effective_start_time`<sup>Required</sup> <a name="effective_start_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.effectiveStartTime"></a>

```python
effective_start_time: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.configurationInput"></a>

```python
configuration_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.configuration"></a>

```python
configuration: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnectionOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection">DataDatabricksLakewatchDatasourcesDatasourcesUnityCatalogConnection</a>

---


### DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference <a name="DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy">DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy">DataDatabricksLakewatchDatasourcesDatasourcesUpdatedBy</a>

---


### DataDatabricksLakewatchDatasourcesProviderConfigOutputReference <a name="DataDatabricksLakewatchDatasourcesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_datasources

dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchDatasourcesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchDatasources.DataDatabricksLakewatchDatasourcesProviderConfig">DataDatabricksLakewatchDatasourcesProviderConfig</a>

---



