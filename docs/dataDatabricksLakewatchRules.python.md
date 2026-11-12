# `dataDatabricksLakewatchRules` Submodule <a name="`dataDatabricksLakewatchRules` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchRules <a name="DataDatabricksLakewatchRules" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules databricks_lakewatch_rules}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRules(
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
  provider_config: DataDatabricksLakewatchRulesProviderConfig = None,
  schema_name: str = None,
  view: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#catalog_name DataDatabricksLakewatchRules#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#filter DataDatabricksLakewatchRules#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#page_size DataDatabricksLakewatchRules#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#provider_config DataDatabricksLakewatchRules#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#schema_name DataDatabricksLakewatchRules#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#view DataDatabricksLakewatchRules#view}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.catalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#catalog_name DataDatabricksLakewatchRules#catalog_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#filter DataDatabricksLakewatchRules#filter}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#page_size DataDatabricksLakewatchRules#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#provider_config DataDatabricksLakewatchRules#provider_config}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#schema_name DataDatabricksLakewatchRules#schema_name}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.Initializer.parameter.view"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#view DataDatabricksLakewatchRules#view}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetSchemaName">reset_schema_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetView">reset_view</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#workspace_id DataDatabricksLakewatchRules#workspace_id}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

##### `reset_view` <a name="reset_view" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.resetView"></a>

```python
def reset_view() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchRules resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksLakewatchRules resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksLakewatchRules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksLakewatchRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference">DataDatabricksLakewatchRulesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList">DataDatabricksLakewatchRulesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.viewInput">view_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.view">view</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchRulesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference">DataDatabricksLakewatchRulesProviderConfigOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.rules"></a>

```python
rules: DataDatabricksLakewatchRulesRulesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList">DataDatabricksLakewatchRulesRulesList</a>

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksLakewatchRulesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a>

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `view_input`<sup>Optional</sup> <a name="view_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.viewInput"></a>

```python
view_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.view"></a>

```python
view: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchRulesConfig <a name="DataDatabricksLakewatchRulesConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig(
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
  provider_config: DataDatabricksLakewatchRulesProviderConfig = None,
  schema_name: str = None,
  view: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#catalog_name DataDatabricksLakewatchRules#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#filter DataDatabricksLakewatchRules#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#page_size DataDatabricksLakewatchRules#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#provider_config DataDatabricksLakewatchRules#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#schema_name DataDatabricksLakewatchRules#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#view DataDatabricksLakewatchRules#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#catalog_name DataDatabricksLakewatchRules#catalog_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#filter DataDatabricksLakewatchRules#filter}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#page_size DataDatabricksLakewatchRules#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchRulesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#provider_config DataDatabricksLakewatchRules#provider_config}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#schema_name DataDatabricksLakewatchRules#schema_name}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesConfig.property.view"></a>

```python
view: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#view DataDatabricksLakewatchRules#view}.

---

### DataDatabricksLakewatchRulesProviderConfig <a name="DataDatabricksLakewatchRulesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#workspace_id DataDatabricksLakewatchRules#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#workspace_id DataDatabricksLakewatchRules#workspace_id}.

---

### DataDatabricksLakewatchRulesRules <a name="DataDatabricksLakewatchRulesRules" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules(
  name: str,
  provider_config: DataDatabricksLakewatchRulesRulesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#name DataDatabricksLakewatchRules#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig">DataDatabricksLakewatchRulesRulesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#provider_config DataDatabricksLakewatchRules#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#name DataDatabricksLakewatchRules#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchRulesRulesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig">DataDatabricksLakewatchRulesRulesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#provider_config DataDatabricksLakewatchRules#provider_config}.

---

### DataDatabricksLakewatchRulesRulesBatch <a name="DataDatabricksLakewatchRulesRulesBatch" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch(
  custom: DataDatabricksLakewatchRulesRulesBatchCustom = None,
  sql: DataDatabricksLakewatchRulesRulesBatchSql = None,
  warehouse_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom">DataDatabricksLakewatchRulesRulesBatchCustom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#custom DataDatabricksLakewatchRules#custom}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.property.sql">sql</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql">DataDatabricksLakewatchRulesRulesBatchSql</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sql DataDatabricksLakewatchRules#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.property.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#warehouse_id DataDatabricksLakewatchRules#warehouse_id}. |

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.property.custom"></a>

```python
custom: DataDatabricksLakewatchRulesRulesBatchCustom
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom">DataDatabricksLakewatchRulesRulesBatchCustom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#custom DataDatabricksLakewatchRules#custom}.

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.property.sql"></a>

```python
sql: DataDatabricksLakewatchRulesRulesBatchSql
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql">DataDatabricksLakewatchRulesRulesBatchSql</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sql DataDatabricksLakewatchRules#sql}.

---

##### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#warehouse_id DataDatabricksLakewatchRules#warehouse_id}.

---

### DataDatabricksLakewatchRulesRulesBatchCustom <a name="DataDatabricksLakewatchRulesRulesBatchCustom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom(
  notebook: str,
  options: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom.property.notebook">notebook</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#notebook DataDatabricksLakewatchRules#notebook}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#options DataDatabricksLakewatchRules#options}. |

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom.property.notebook"></a>

```python
notebook: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#notebook DataDatabricksLakewatchRules#notebook}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#options DataDatabricksLakewatchRules#options}.

---

### DataDatabricksLakewatchRulesRulesBatchSql <a name="DataDatabricksLakewatchRulesRulesBatchSql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql(
  query: str,
  default_catalog_name: str = None,
  default_schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#query DataDatabricksLakewatchRules#query}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.property.defaultCatalogName">default_catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_catalog_name DataDatabricksLakewatchRules#default_catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.property.defaultSchemaName">default_schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_schema_name DataDatabricksLakewatchRules#default_schema_name}. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#query DataDatabricksLakewatchRules#query}.

---

##### `default_catalog_name`<sup>Optional</sup> <a name="default_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.property.defaultCatalogName"></a>

```python
default_catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_catalog_name DataDatabricksLakewatchRules#default_catalog_name}.

---

##### `default_schema_name`<sup>Optional</sup> <a name="default_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql.property.defaultSchemaName"></a>

```python
default_schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_schema_name DataDatabricksLakewatchRules#default_schema_name}.

---

### DataDatabricksLakewatchRulesRulesCreatedBy <a name="DataDatabricksLakewatchRulesRulesCreatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}.

---

### DataDatabricksLakewatchRulesRulesMitre <a name="DataDatabricksLakewatchRulesRulesMitre" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre(
  sub_technique: str = None,
  sub_technique_id: str = None,
  tactic: str = None,
  taxonomy: str = None,
  technique: str = None,
  technique_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.subTechnique">sub_technique</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sub_technique DataDatabricksLakewatchRules#sub_technique}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.subTechniqueId">sub_technique_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sub_technique_id DataDatabricksLakewatchRules#sub_technique_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.tactic">tactic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#tactic DataDatabricksLakewatchRules#tactic}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.taxonomy">taxonomy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#taxonomy DataDatabricksLakewatchRules#taxonomy}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.technique">technique</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#technique DataDatabricksLakewatchRules#technique}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.techniqueId">technique_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#technique_id DataDatabricksLakewatchRules#technique_id}. |

---

##### `sub_technique`<sup>Optional</sup> <a name="sub_technique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.subTechnique"></a>

```python
sub_technique: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sub_technique DataDatabricksLakewatchRules#sub_technique}.

---

##### `sub_technique_id`<sup>Optional</sup> <a name="sub_technique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.subTechniqueId"></a>

```python
sub_technique_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#sub_technique_id DataDatabricksLakewatchRules#sub_technique_id}.

---

##### `tactic`<sup>Optional</sup> <a name="tactic" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.tactic"></a>

```python
tactic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#tactic DataDatabricksLakewatchRules#tactic}.

---

##### `taxonomy`<sup>Optional</sup> <a name="taxonomy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.taxonomy"></a>

```python
taxonomy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#taxonomy DataDatabricksLakewatchRules#taxonomy}.

---

##### `technique`<sup>Optional</sup> <a name="technique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.technique"></a>

```python
technique: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#technique DataDatabricksLakewatchRules#technique}.

---

##### `technique_id`<sup>Optional</sup> <a name="technique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre.property.techniqueId"></a>

```python
technique_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#technique_id DataDatabricksLakewatchRules#technique_id}.

---

### DataDatabricksLakewatchRulesRulesOriginalContentPack <a name="DataDatabricksLakewatchRulesRulesOriginalContentPack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPack.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPack()
```


### DataDatabricksLakewatchRulesRulesOutput <a name="DataDatabricksLakewatchRulesRulesOutput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput(
  context: typing.Mapping[str] = None,
  default_context: bool | IResolvable = None,
  event_time_column: str = None,
  summary: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.context">context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#context DataDatabricksLakewatchRules#context}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.defaultContext">default_context</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_context DataDatabricksLakewatchRules#default_context}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.eventTimeColumn">event_time_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#event_time_column DataDatabricksLakewatchRules#event_time_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.summary">summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#summary DataDatabricksLakewatchRules#summary}. |

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.context"></a>

```python
context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#context DataDatabricksLakewatchRules#context}.

---

##### `default_context`<sup>Optional</sup> <a name="default_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.defaultContext"></a>

```python
default_context: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_context DataDatabricksLakewatchRules#default_context}.

---

##### `event_time_column`<sup>Optional</sup> <a name="event_time_column" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.eventTimeColumn"></a>

```python
event_time_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#event_time_column DataDatabricksLakewatchRules#event_time_column}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput.property.summary"></a>

```python
summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#summary DataDatabricksLakewatchRules#summary}.

---

### DataDatabricksLakewatchRulesRulesOwner <a name="DataDatabricksLakewatchRulesRulesOwner" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}.

---

### DataDatabricksLakewatchRulesRulesProviderConfig <a name="DataDatabricksLakewatchRulesRulesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#workspace_id DataDatabricksLakewatchRules#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#workspace_id DataDatabricksLakewatchRules#workspace_id}.

---

### DataDatabricksLakewatchRulesRulesSchedule <a name="DataDatabricksLakewatchRulesRulesSchedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule(
  at_least_every: str = None,
  continuous: bool | IResolvable = None,
  cron_expression: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.atLeastEvery">at_least_every</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#at_least_every DataDatabricksLakewatchRules#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.continuous">continuous</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#continuous DataDatabricksLakewatchRules#continuous}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.cronExpression">cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#cron_expression DataDatabricksLakewatchRules#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#enabled DataDatabricksLakewatchRules#enabled}. |

---

##### `at_least_every`<sup>Optional</sup> <a name="at_least_every" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.atLeastEvery"></a>

```python
at_least_every: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#at_least_every DataDatabricksLakewatchRules#at_least_every}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.continuous"></a>

```python
continuous: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#continuous DataDatabricksLakewatchRules#continuous}.

---

##### `cron_expression`<sup>Optional</sup> <a name="cron_expression" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#cron_expression DataDatabricksLakewatchRules#cron_expression}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#enabled DataDatabricksLakewatchRules#enabled}.

---

### DataDatabricksLakewatchRulesRulesStatus <a name="DataDatabricksLakewatchRulesRulesStatus" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatus.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatus()
```


### DataDatabricksLakewatchRulesRulesTimerange <a name="DataDatabricksLakewatchRulesRulesTimerange" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange(
  extend_lookback: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange.property.extendLookback">extend_lookback</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#extend_lookback DataDatabricksLakewatchRules#extend_lookback}. |

---

##### `extend_lookback`<sup>Optional</sup> <a name="extend_lookback" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange.property.extendLookback"></a>

```python
extend_lookback: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#extend_lookback DataDatabricksLakewatchRules#extend_lookback}.

---

### DataDatabricksLakewatchRulesRulesUpdatedBy <a name="DataDatabricksLakewatchRulesRulesUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#display_name DataDatabricksLakewatchRules#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#email DataDatabricksLakewatchRules#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#id DataDatabricksLakewatchRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#principal_type DataDatabricksLakewatchRules#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchRulesProviderConfigOutputReference <a name="DataDatabricksLakewatchRulesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchRulesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesProviderConfig">DataDatabricksLakewatchRulesProviderConfig</a>

---


### DataDatabricksLakewatchRulesRulesBatchCustomOutputReference <a name="DataDatabricksLakewatchRulesRulesBatchCustomOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.resetOptions">reset_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_options` <a name="reset_options" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.notebookInput">notebook_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.notebook">notebook</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom">DataDatabricksLakewatchRulesRulesBatchCustom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notebook_input`<sup>Optional</sup> <a name="notebook_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.notebookInput"></a>

```python
notebook_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.notebook"></a>

```python
notebook: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchRulesRulesBatchCustom
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom">DataDatabricksLakewatchRulesRulesBatchCustom</a>

---


### DataDatabricksLakewatchRulesRulesBatchOutputReference <a name="DataDatabricksLakewatchRulesRulesBatchOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putCustom">put_custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putSql">put_sql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resetCustom">reset_custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resetSql">reset_sql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resetWarehouseId">reset_warehouse_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom` <a name="put_custom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putCustom"></a>

```python
def put_custom(
  notebook: str,
  options: typing.Mapping[str] = None
) -> None
```

###### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putCustom.parameter.notebook"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#notebook DataDatabricksLakewatchRules#notebook}.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putCustom.parameter.options"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#options DataDatabricksLakewatchRules#options}.

---

##### `put_sql` <a name="put_sql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putSql"></a>

```python
def put_sql(
  query: str,
  default_catalog_name: str = None,
  default_schema_name: str = None
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putSql.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#query DataDatabricksLakewatchRules#query}.

---

###### `default_catalog_name`<sup>Optional</sup> <a name="default_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putSql.parameter.defaultCatalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_catalog_name DataDatabricksLakewatchRules#default_catalog_name}.

---

###### `default_schema_name`<sup>Optional</sup> <a name="default_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.putSql.parameter.defaultSchemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#default_schema_name DataDatabricksLakewatchRules#default_schema_name}.

---

##### `reset_custom` <a name="reset_custom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resetCustom"></a>

```python
def reset_custom() -> None
```

##### `reset_sql` <a name="reset_sql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resetSql"></a>

```python
def reset_sql() -> None
```

##### `reset_warehouse_id` <a name="reset_warehouse_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.resetWarehouseId"></a>

```python
def reset_warehouse_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference">DataDatabricksLakewatchRulesRulesBatchCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.sql">sql</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference">DataDatabricksLakewatchRulesRulesBatchSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.customInput">custom_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom">DataDatabricksLakewatchRulesRulesBatchCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.sqlInput">sql_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql">DataDatabricksLakewatchRulesRulesBatchSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.warehouseIdInput">warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch">DataDatabricksLakewatchRulesRulesBatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.custom"></a>

```python
custom: DataDatabricksLakewatchRulesRulesBatchCustomOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustomOutputReference">DataDatabricksLakewatchRulesRulesBatchCustomOutputReference</a>

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.sql"></a>

```python
sql: DataDatabricksLakewatchRulesRulesBatchSqlOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference">DataDatabricksLakewatchRulesRulesBatchSqlOutputReference</a>

---

##### `custom_input`<sup>Optional</sup> <a name="custom_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.customInput"></a>

```python
custom_input: IResolvable | DataDatabricksLakewatchRulesRulesBatchCustom
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchCustom">DataDatabricksLakewatchRulesRulesBatchCustom</a>

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.sqlInput"></a>

```python
sql_input: IResolvable | DataDatabricksLakewatchRulesRulesBatchSql
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql">DataDatabricksLakewatchRulesRulesBatchSql</a>

---

##### `warehouse_id_input`<sup>Optional</sup> <a name="warehouse_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.warehouseIdInput"></a>

```python
warehouse_id_input: str
```

- *Type:* str

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRulesRulesBatch
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatch">DataDatabricksLakewatchRulesRulesBatch</a>

---


### DataDatabricksLakewatchRulesRulesBatchSqlOutputReference <a name="DataDatabricksLakewatchRulesRulesBatchSqlOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resetDefaultCatalogName">reset_default_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resetDefaultSchemaName">reset_default_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_catalog_name` <a name="reset_default_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resetDefaultCatalogName"></a>

```python
def reset_default_catalog_name() -> None
```

##### `reset_default_schema_name` <a name="reset_default_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.resetDefaultSchemaName"></a>

```python
def reset_default_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultCatalogNameInput">default_catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultSchemaNameInput">default_schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultCatalogName">default_catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultSchemaName">default_schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql">DataDatabricksLakewatchRulesRulesBatchSql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_catalog_name_input`<sup>Optional</sup> <a name="default_catalog_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultCatalogNameInput"></a>

```python
default_catalog_name_input: str
```

- *Type:* str

---

##### `default_schema_name_input`<sup>Optional</sup> <a name="default_schema_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultSchemaNameInput"></a>

```python
default_schema_name_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `default_catalog_name`<sup>Required</sup> <a name="default_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultCatalogName"></a>

```python
default_catalog_name: str
```

- *Type:* str

---

##### `default_schema_name`<sup>Required</sup> <a name="default_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.defaultSchemaName"></a>

```python
default_schema_name: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSqlOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchRulesRulesBatchSql
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchSql">DataDatabricksLakewatchRulesRulesBatchSql</a>

---


### DataDatabricksLakewatchRulesRulesCreatedByOutputReference <a name="DataDatabricksLakewatchRulesRulesCreatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy">DataDatabricksLakewatchRulesRulesCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRulesRulesCreatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedBy">DataDatabricksLakewatchRulesRulesCreatedBy</a>

---


### DataDatabricksLakewatchRulesRulesList <a name="DataDatabricksLakewatchRulesRulesList" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksLakewatchRulesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules">DataDatabricksLakewatchRulesRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksLakewatchRulesRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules">DataDatabricksLakewatchRulesRules</a>]

---


### DataDatabricksLakewatchRulesRulesMitreList <a name="DataDatabricksLakewatchRulesRulesMitreList" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksLakewatchRulesRulesMitreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre">DataDatabricksLakewatchRulesRulesMitre</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksLakewatchRulesRulesMitre]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre">DataDatabricksLakewatchRulesRulesMitre</a>]

---


### DataDatabricksLakewatchRulesRulesMitreOutputReference <a name="DataDatabricksLakewatchRulesRulesMitreOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetSubTechnique">reset_sub_technique</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetSubTechniqueId">reset_sub_technique_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTactic">reset_tactic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTaxonomy">reset_taxonomy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTechnique">reset_technique</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTechniqueId">reset_technique_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sub_technique` <a name="reset_sub_technique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetSubTechnique"></a>

```python
def reset_sub_technique() -> None
```

##### `reset_sub_technique_id` <a name="reset_sub_technique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetSubTechniqueId"></a>

```python
def reset_sub_technique_id() -> None
```

##### `reset_tactic` <a name="reset_tactic" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTactic"></a>

```python
def reset_tactic() -> None
```

##### `reset_taxonomy` <a name="reset_taxonomy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTaxonomy"></a>

```python
def reset_taxonomy() -> None
```

##### `reset_technique` <a name="reset_technique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTechnique"></a>

```python
def reset_technique() -> None
```

##### `reset_technique_id` <a name="reset_technique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.resetTechniqueId"></a>

```python
def reset_technique_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechniqueIdInput">sub_technique_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechniqueInput">sub_technique_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.tacticInput">tactic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.taxonomyInput">taxonomy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.techniqueIdInput">technique_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.techniqueInput">technique_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechnique">sub_technique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechniqueId">sub_technique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.tactic">tactic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.taxonomy">taxonomy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.technique">technique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.techniqueId">technique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre">DataDatabricksLakewatchRulesRulesMitre</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sub_technique_id_input`<sup>Optional</sup> <a name="sub_technique_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechniqueIdInput"></a>

```python
sub_technique_id_input: str
```

- *Type:* str

---

##### `sub_technique_input`<sup>Optional</sup> <a name="sub_technique_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechniqueInput"></a>

```python
sub_technique_input: str
```

- *Type:* str

---

##### `tactic_input`<sup>Optional</sup> <a name="tactic_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.tacticInput"></a>

```python
tactic_input: str
```

- *Type:* str

---

##### `taxonomy_input`<sup>Optional</sup> <a name="taxonomy_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.taxonomyInput"></a>

```python
taxonomy_input: str
```

- *Type:* str

---

##### `technique_id_input`<sup>Optional</sup> <a name="technique_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.techniqueIdInput"></a>

```python
technique_id_input: str
```

- *Type:* str

---

##### `technique_input`<sup>Optional</sup> <a name="technique_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.techniqueInput"></a>

```python
technique_input: str
```

- *Type:* str

---

##### `sub_technique`<sup>Required</sup> <a name="sub_technique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechnique"></a>

```python
sub_technique: str
```

- *Type:* str

---

##### `sub_technique_id`<sup>Required</sup> <a name="sub_technique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.subTechniqueId"></a>

```python
sub_technique_id: str
```

- *Type:* str

---

##### `tactic`<sup>Required</sup> <a name="tactic" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.tactic"></a>

```python
tactic: str
```

- *Type:* str

---

##### `taxonomy`<sup>Required</sup> <a name="taxonomy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.taxonomy"></a>

```python
taxonomy: str
```

- *Type:* str

---

##### `technique`<sup>Required</sup> <a name="technique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.technique"></a>

```python
technique: str
```

- *Type:* str

---

##### `technique_id`<sup>Required</sup> <a name="technique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.techniqueId"></a>

```python
technique_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRulesRulesMitre
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitre">DataDatabricksLakewatchRulesRulesMitre</a>

---


### DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference <a name="DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPack">DataDatabricksLakewatchRulesRulesOriginalContentPack</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRulesRulesOriginalContentPack
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPack">DataDatabricksLakewatchRulesRulesOriginalContentPack</a>

---


### DataDatabricksLakewatchRulesRulesOutputOutputReference <a name="DataDatabricksLakewatchRulesRulesOutputOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetContext">reset_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetDefaultContext">reset_default_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetEventTimeColumn">reset_event_time_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetSummary">reset_summary</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_context` <a name="reset_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetContext"></a>

```python
def reset_context() -> None
```

##### `reset_default_context` <a name="reset_default_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetDefaultContext"></a>

```python
def reset_default_context() -> None
```

##### `reset_event_time_column` <a name="reset_event_time_column" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetEventTimeColumn"></a>

```python
def reset_event_time_column() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.resetSummary"></a>

```python
def reset_summary() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.contextInput">context_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.defaultContextInput">default_context_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.eventTimeColumnInput">event_time_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.context">context</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.defaultContext">default_context</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.eventTimeColumn">event_time_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput">DataDatabricksLakewatchRulesRulesOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_input`<sup>Optional</sup> <a name="context_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.contextInput"></a>

```python
context_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_context_input`<sup>Optional</sup> <a name="default_context_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.defaultContextInput"></a>

```python
default_context_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_time_column_input`<sup>Optional</sup> <a name="event_time_column_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.eventTimeColumnInput"></a>

```python
event_time_column_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.context"></a>

```python
context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_context`<sup>Required</sup> <a name="default_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.defaultContext"></a>

```python
default_context: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_time_column`<sup>Required</sup> <a name="event_time_column" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.eventTimeColumn"></a>

```python
event_time_column: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRulesRulesOutput
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutput">DataDatabricksLakewatchRulesRulesOutput</a>

---


### DataDatabricksLakewatchRulesRulesOutputReference <a name="DataDatabricksLakewatchRulesRulesOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rules#workspace_id DataDatabricksLakewatchRules#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.annotations">annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.batch">batch</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference">DataDatabricksLakewatchRulesRulesBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.computeWorkspaceId">compute_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.contentResourceId">content_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.createdBy">created_by</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference">DataDatabricksLakewatchRulesRulesCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.deduplication">deduplication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.deduplicationTimeWindow">deduplication_time_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveCatalogName">effective_catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveRuleName">effective_rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveRunAsPrincipal">effective_run_as_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveSchemaName">effective_schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.fidelity">fidelity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.mitre">mitre</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList">DataDatabricksLakewatchRulesRulesMitreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.objective">objective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.originalContentPack">original_content_pack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference">DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.output">output</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference">DataDatabricksLakewatchRulesRulesOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.owner">owner</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference">DataDatabricksLakewatchRulesRulesOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference">DataDatabricksLakewatchRulesRulesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.references">references</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.runAsPrincipal">run_as_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.runbook">runbook</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference">DataDatabricksLakewatchRulesRulesScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference">DataDatabricksLakewatchRulesRulesStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.suppressUntilTime">suppress_until_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.timerange">timerange</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference">DataDatabricksLakewatchRulesRulesTimerangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.updatedBy">updated_by</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference">DataDatabricksLakewatchRulesRulesUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig">DataDatabricksLakewatchRulesRulesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules">DataDatabricksLakewatchRulesRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.annotations"></a>

```python
annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `batch`<sup>Required</sup> <a name="batch" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.batch"></a>

```python
batch: DataDatabricksLakewatchRulesRulesBatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesBatchOutputReference">DataDatabricksLakewatchRulesRulesBatchOutputReference</a>

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `compute_workspace_id`<sup>Required</sup> <a name="compute_workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.computeWorkspaceId"></a>

```python
compute_workspace_id: str
```

- *Type:* str

---

##### `content_resource_id`<sup>Required</sup> <a name="content_resource_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.contentResourceId"></a>

```python
content_resource_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.createdBy"></a>

```python
created_by: DataDatabricksLakewatchRulesRulesCreatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesCreatedByOutputReference">DataDatabricksLakewatchRulesRulesCreatedByOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `deduplication`<sup>Required</sup> <a name="deduplication" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.deduplication"></a>

```python
deduplication: str
```

- *Type:* str

---

##### `deduplication_time_window`<sup>Required</sup> <a name="deduplication_time_window" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.deduplicationTimeWindow"></a>

```python
deduplication_time_window: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effective_catalog_name`<sup>Required</sup> <a name="effective_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveCatalogName"></a>

```python
effective_catalog_name: str
```

- *Type:* str

---

##### `effective_rule_name`<sup>Required</sup> <a name="effective_rule_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveRuleName"></a>

```python
effective_rule_name: str
```

- *Type:* str

---

##### `effective_run_as_principal`<sup>Required</sup> <a name="effective_run_as_principal" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveRunAsPrincipal"></a>

```python
effective_run_as_principal: str
```

- *Type:* str

---

##### `effective_schema_name`<sup>Required</sup> <a name="effective_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.effectiveSchemaName"></a>

```python
effective_schema_name: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `fidelity`<sup>Required</sup> <a name="fidelity" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.fidelity"></a>

```python
fidelity: str
```

- *Type:* str

---

##### `mitre`<sup>Required</sup> <a name="mitre" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.mitre"></a>

```python
mitre: DataDatabricksLakewatchRulesRulesMitreList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesMitreList">DataDatabricksLakewatchRulesRulesMitreList</a>

---

##### `objective`<sup>Required</sup> <a name="objective" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.objective"></a>

```python
objective: str
```

- *Type:* str

---

##### `original_content_pack`<sup>Required</sup> <a name="original_content_pack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.originalContentPack"></a>

```python
original_content_pack: DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference">DataDatabricksLakewatchRulesRulesOriginalContentPackOutputReference</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.output"></a>

```python
output: DataDatabricksLakewatchRulesRulesOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputOutputReference">DataDatabricksLakewatchRulesRulesOutputOutputReference</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.owner"></a>

```python
owner: DataDatabricksLakewatchRulesRulesOwnerOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference">DataDatabricksLakewatchRulesRulesOwnerOutputReference</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchRulesRulesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference">DataDatabricksLakewatchRulesRulesProviderConfigOutputReference</a>

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.references"></a>

```python
references: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `run_as_principal`<sup>Required</sup> <a name="run_as_principal" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.runAsPrincipal"></a>

```python
run_as_principal: str
```

- *Type:* str

---

##### `runbook`<sup>Required</sup> <a name="runbook" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.runbook"></a>

```python
runbook: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.schedule"></a>

```python
schedule: DataDatabricksLakewatchRulesRulesScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference">DataDatabricksLakewatchRulesRulesScheduleOutputReference</a>

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.status"></a>

```python
status: DataDatabricksLakewatchRulesRulesStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference">DataDatabricksLakewatchRulesRulesStatusOutputReference</a>

---

##### `suppress_until_time`<sup>Required</sup> <a name="suppress_until_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.suppressUntilTime"></a>

```python
suppress_until_time: str
```

- *Type:* str

---

##### `timerange`<sup>Required</sup> <a name="timerange" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.timerange"></a>

```python
timerange: DataDatabricksLakewatchRulesRulesTimerangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference">DataDatabricksLakewatchRulesRulesTimerangeOutputReference</a>

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.updatedBy"></a>

```python
updated_by: DataDatabricksLakewatchRulesRulesUpdatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference">DataDatabricksLakewatchRulesRulesUpdatedByOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksLakewatchRulesRulesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig">DataDatabricksLakewatchRulesRulesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRulesRules
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRules">DataDatabricksLakewatchRulesRules</a>

---


### DataDatabricksLakewatchRulesRulesOwnerOutputReference <a name="DataDatabricksLakewatchRulesRulesOwnerOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner">DataDatabricksLakewatchRulesRulesOwner</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwnerOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRulesRulesOwner
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesOwner">DataDatabricksLakewatchRulesRulesOwner</a>

---


### DataDatabricksLakewatchRulesRulesProviderConfigOutputReference <a name="DataDatabricksLakewatchRulesRulesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig">DataDatabricksLakewatchRulesRulesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchRulesRulesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesProviderConfig">DataDatabricksLakewatchRulesRulesProviderConfig</a>

---


### DataDatabricksLakewatchRulesRulesScheduleOutputReference <a name="DataDatabricksLakewatchRulesRulesScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetAtLeastEvery">reset_at_least_every</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetContinuous">reset_continuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetCronExpression">reset_cron_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_at_least_every` <a name="reset_at_least_every" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetAtLeastEvery"></a>

```python
def reset_at_least_every() -> None
```

##### `reset_continuous` <a name="reset_continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetContinuous"></a>

```python
def reset_continuous() -> None
```

##### `reset_cron_expression` <a name="reset_cron_expression" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetCronExpression"></a>

```python
def reset_cron_expression() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.atLeastEveryInput">at_least_every_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.continuousInput">continuous_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.cronExpressionInput">cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.atLeastEvery">at_least_every</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.continuous">continuous</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule">DataDatabricksLakewatchRulesRulesSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `at_least_every_input`<sup>Optional</sup> <a name="at_least_every_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.atLeastEveryInput"></a>

```python
at_least_every_input: str
```

- *Type:* str

---

##### `continuous_input`<sup>Optional</sup> <a name="continuous_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.continuousInput"></a>

```python
continuous_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cron_expression_input`<sup>Optional</sup> <a name="cron_expression_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.cronExpressionInput"></a>

```python
cron_expression_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `at_least_every`<sup>Required</sup> <a name="at_least_every" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.atLeastEvery"></a>

```python
at_least_every: str
```

- *Type:* str

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.continuous"></a>

```python
continuous: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRulesRulesSchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesSchedule">DataDatabricksLakewatchRulesRulesSchedule</a>

---


### DataDatabricksLakewatchRulesRulesStatusOutputReference <a name="DataDatabricksLakewatchRulesRulesStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastCompleteTime">last_complete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastErrorMessage">last_error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastStartTime">last_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastStatusChangeTime">last_status_change_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.runState">run_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatus">DataDatabricksLakewatchRulesRulesStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `last_complete_time`<sup>Required</sup> <a name="last_complete_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastCompleteTime"></a>

```python
last_complete_time: str
```

- *Type:* str

---

##### `last_error_message`<sup>Required</sup> <a name="last_error_message" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastErrorMessage"></a>

```python
last_error_message: str
```

- *Type:* str

---

##### `last_start_time`<sup>Required</sup> <a name="last_start_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastStartTime"></a>

```python
last_start_time: str
```

- *Type:* str

---

##### `last_status_change_time`<sup>Required</sup> <a name="last_status_change_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lastStatusChangeTime"></a>

```python
last_status_change_time: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `run_state`<sup>Required</sup> <a name="run_state" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.runState"></a>

```python
run_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRulesRulesStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesStatus">DataDatabricksLakewatchRulesRulesStatus</a>

---


### DataDatabricksLakewatchRulesRulesTimerangeOutputReference <a name="DataDatabricksLakewatchRulesRulesTimerangeOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.resetExtendLookback">reset_extend_lookback</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_extend_lookback` <a name="reset_extend_lookback" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.resetExtendLookback"></a>

```python
def reset_extend_lookback() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.extendLookbackInput">extend_lookback_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.extendLookback">extend_lookback</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange">DataDatabricksLakewatchRulesRulesTimerange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extend_lookback_input`<sup>Optional</sup> <a name="extend_lookback_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.extendLookbackInput"></a>

```python
extend_lookback_input: str
```

- *Type:* str

---

##### `extend_lookback`<sup>Required</sup> <a name="extend_lookback" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.extendLookback"></a>

```python
extend_lookback: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerangeOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRulesRulesTimerange
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesTimerange">DataDatabricksLakewatchRulesRulesTimerange</a>

---


### DataDatabricksLakewatchRulesRulesUpdatedByOutputReference <a name="DataDatabricksLakewatchRulesRulesUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rules

dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy">DataDatabricksLakewatchRulesRulesUpdatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRulesRulesUpdatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRules.DataDatabricksLakewatchRulesRulesUpdatedBy">DataDatabricksLakewatchRulesRulesUpdatedBy</a>

---



