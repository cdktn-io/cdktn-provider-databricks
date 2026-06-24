# `dataDatabricksSecretUcs` Submodule <a name="`dataDatabricksSecretUcs` Submodule" id="@cdktn/provider-databricks.dataDatabricksSecretUcs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSecretUcs <a name="DataDatabricksSecretUcs" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs databricks_secret_ucs}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_secret_ucs

dataDatabricksSecretUcs.DataDatabricksSecretUcs(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_name: str = None,
  include_browse: bool | IResolvable = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksSecretUcsProviderConfig = None,
  schema_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#catalog_name DataDatabricksSecretUcs#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.includeBrowse">include_browse</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#include_browse DataDatabricksSecretUcs#include_browse}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#page_size DataDatabricksSecretUcs#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfig">DataDatabricksSecretUcsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#provider_config DataDatabricksSecretUcs#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#schema_name DataDatabricksSecretUcs#schema_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.catalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#catalog_name DataDatabricksSecretUcs#catalog_name}.

---

##### `include_browse`<sup>Optional</sup> <a name="include_browse" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.includeBrowse"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#include_browse DataDatabricksSecretUcs#include_browse}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#page_size DataDatabricksSecretUcs#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfig">DataDatabricksSecretUcsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#provider_config DataDatabricksSecretUcs#provider_config}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.Initializer.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#schema_name DataDatabricksSecretUcs#schema_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.resetIncludeBrowse">reset_include_browse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#workspace_id DataDatabricksSecretUcs#workspace_id}.

---

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_include_browse` <a name="reset_include_browse" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.resetIncludeBrowse"></a>

```python
def reset_include_browse() -> None
```

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksSecretUcs resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_secret_ucs

dataDatabricksSecretUcs.DataDatabricksSecretUcs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_secret_ucs

dataDatabricksSecretUcs.DataDatabricksSecretUcs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_secret_ucs

dataDatabricksSecretUcs.DataDatabricksSecretUcs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_secret_ucs

dataDatabricksSecretUcs.DataDatabricksSecretUcs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksSecretUcs resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksSecretUcs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksSecretUcs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksSecretUcs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference">DataDatabricksSecretUcsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.secrets">secrets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList">DataDatabricksSecretUcsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.includeBrowseInput">include_browse_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfig">DataDatabricksSecretUcsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.includeBrowse">include_browse</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.providerConfig"></a>

```python
provider_config: DataDatabricksSecretUcsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference">DataDatabricksSecretUcsProviderConfigOutputReference</a>

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.secrets"></a>

```python
secrets: DataDatabricksSecretUcsSecretsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList">DataDatabricksSecretUcsSecretsList</a>

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `include_browse_input`<sup>Optional</sup> <a name="include_browse_input" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.includeBrowseInput"></a>

```python
include_browse_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksSecretUcsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfig">DataDatabricksSecretUcsProviderConfig</a>

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `include_browse`<sup>Required</sup> <a name="include_browse" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.includeBrowse"></a>

```python
include_browse: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSecretUcsConfig <a name="DataDatabricksSecretUcsConfig" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_secret_ucs

dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_name: str = None,
  include_browse: bool | IResolvable = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksSecretUcsProviderConfig = None,
  schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#catalog_name DataDatabricksSecretUcs#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.includeBrowse">include_browse</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#include_browse DataDatabricksSecretUcs#include_browse}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#page_size DataDatabricksSecretUcs#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfig">DataDatabricksSecretUcsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#provider_config DataDatabricksSecretUcs#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#schema_name DataDatabricksSecretUcs#schema_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#catalog_name DataDatabricksSecretUcs#catalog_name}.

---

##### `include_browse`<sup>Optional</sup> <a name="include_browse" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.includeBrowse"></a>

```python
include_browse: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#include_browse DataDatabricksSecretUcs#include_browse}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#page_size DataDatabricksSecretUcs#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksSecretUcsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfig">DataDatabricksSecretUcsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#provider_config DataDatabricksSecretUcs#provider_config}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#schema_name DataDatabricksSecretUcs#schema_name}.

---

### DataDatabricksSecretUcsProviderConfig <a name="DataDatabricksSecretUcsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_secret_ucs

dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#workspace_id DataDatabricksSecretUcs#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#workspace_id DataDatabricksSecretUcs#workspace_id}.

---

### DataDatabricksSecretUcsSecrets <a name="DataDatabricksSecretUcsSecrets" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecrets.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_secret_ucs

dataDatabricksSecretUcs.DataDatabricksSecretUcsSecrets(
  full_name: str,
  provider_config: DataDatabricksSecretUcsSecretsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecrets.property.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#full_name DataDatabricksSecretUcs#full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecrets.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfig">DataDatabricksSecretUcsSecretsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#provider_config DataDatabricksSecretUcs#provider_config}. |

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecrets.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#full_name DataDatabricksSecretUcs#full_name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecrets.property.providerConfig"></a>

```python
provider_config: DataDatabricksSecretUcsSecretsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfig">DataDatabricksSecretUcsSecretsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#provider_config DataDatabricksSecretUcs#provider_config}.

---

### DataDatabricksSecretUcsSecretsProviderConfig <a name="DataDatabricksSecretUcsSecretsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_secret_ucs

dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#workspace_id DataDatabricksSecretUcs#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#workspace_id DataDatabricksSecretUcs#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSecretUcsProviderConfigOutputReference <a name="DataDatabricksSecretUcsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_secret_ucs

dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfig">DataDatabricksSecretUcsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksSecretUcsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsProviderConfig">DataDatabricksSecretUcsProviderConfig</a>

---


### DataDatabricksSecretUcsSecretsList <a name="DataDatabricksSecretUcsSecretsList" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_secret_ucs

dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksSecretUcsSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecrets">DataDatabricksSecretUcsSecrets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksSecretUcsSecrets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecrets">DataDatabricksSecretUcsSecrets</a>]

---


### DataDatabricksSecretUcsSecretsOutputReference <a name="DataDatabricksSecretUcsSecretsOutputReference" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_secret_ucs

dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/secret_ucs#workspace_id DataDatabricksSecretUcs#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.browseOnly">browse_only</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.effectiveOwner">effective_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.effectiveValue">effective_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.externalSecretId">external_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference">DataDatabricksSecretUcsSecretsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfig">DataDatabricksSecretUcsSecretsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecrets">DataDatabricksSecretUcsSecrets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `browse_only`<sup>Required</sup> <a name="browse_only" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.browseOnly"></a>

```python
browse_only: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_owner`<sup>Required</sup> <a name="effective_owner" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.effectiveOwner"></a>

```python
effective_owner: str
```

- *Type:* str

---

##### `effective_value`<sup>Required</sup> <a name="effective_value" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.effectiveValue"></a>

```python
effective_value: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `external_secret_id`<sup>Required</sup> <a name="external_secret_id" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.externalSecretId"></a>

```python
external_secret_id: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksSecretUcsSecretsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference">DataDatabricksSecretUcsSecretsProviderConfigOutputReference</a>

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksSecretUcsSecretsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfig">DataDatabricksSecretUcsSecretsProviderConfig</a>

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksSecretUcsSecrets
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecrets">DataDatabricksSecretUcsSecrets</a>

---


### DataDatabricksSecretUcsSecretsProviderConfigOutputReference <a name="DataDatabricksSecretUcsSecretsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_secret_ucs

dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfig">DataDatabricksSecretUcsSecretsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksSecretUcsSecretsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksSecretUcs.DataDatabricksSecretUcsSecretsProviderConfig">DataDatabricksSecretUcsSecretsProviderConfig</a>

---



