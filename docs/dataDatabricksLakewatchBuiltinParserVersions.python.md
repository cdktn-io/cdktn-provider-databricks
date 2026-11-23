# `dataDatabricksLakewatchBuiltinParserVersions` Submodule <a name="`dataDatabricksLakewatchBuiltinParserVersions` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchBuiltinParserVersions <a name="DataDatabricksLakewatchBuiltinParserVersions" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions databricks_lakewatch_builtin_parser_versions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_builtin_parser_versions

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksLakewatchBuiltinParserVersionsProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#parent DataDatabricksLakewatchBuiltinParserVersions#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#page_size DataDatabricksLakewatchBuiltinParserVersions#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#provider_config DataDatabricksLakewatchBuiltinParserVersions#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#parent DataDatabricksLakewatchBuiltinParserVersions#parent}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#page_size DataDatabricksLakewatchBuiltinParserVersions#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#provider_config DataDatabricksLakewatchBuiltinParserVersions#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#workspace_id DataDatabricksLakewatchBuiltinParserVersions#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchBuiltinParserVersions resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_builtin_parser_versions

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_builtin_parser_versions

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_builtin_parser_versions

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_builtin_parser_versions

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksLakewatchBuiltinParserVersions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksLakewatchBuiltinParserVersions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksLakewatchBuiltinParserVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchBuiltinParserVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.builtinParserVersions">builtin_parser_versions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `builtin_parser_versions`<sup>Required</sup> <a name="builtin_parser_versions" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.builtinParserVersions"></a>

```python
builtin_parser_versions: DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksLakewatchBuiltinParserVersionsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsProviderConfig</a>

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_builtin_parser_versions

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions(
  name: str,
  provider_config: DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#name DataDatabricksLakewatchBuiltinParserVersions#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#provider_config DataDatabricksLakewatchBuiltinParserVersions#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#name DataDatabricksLakewatchBuiltinParserVersions#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#provider_config DataDatabricksLakewatchBuiltinParserVersions#provider_config}.

---

### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_builtin_parser_versions

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#workspace_id DataDatabricksLakewatchBuiltinParserVersions#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#workspace_id DataDatabricksLakewatchBuiltinParserVersions#workspace_id}.

---

### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_builtin_parser_versions

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags(
  key: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#key DataDatabricksLakewatchBuiltinParserVersions#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#value DataDatabricksLakewatchBuiltinParserVersions#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#key DataDatabricksLakewatchBuiltinParserVersions#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#value DataDatabricksLakewatchBuiltinParserVersions#value}.

---

### DataDatabricksLakewatchBuiltinParserVersionsConfig <a name="DataDatabricksLakewatchBuiltinParserVersionsConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_builtin_parser_versions

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksLakewatchBuiltinParserVersionsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#parent DataDatabricksLakewatchBuiltinParserVersions#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#page_size DataDatabricksLakewatchBuiltinParserVersions#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#provider_config DataDatabricksLakewatchBuiltinParserVersions#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#parent DataDatabricksLakewatchBuiltinParserVersions#parent}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#page_size DataDatabricksLakewatchBuiltinParserVersions#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchBuiltinParserVersionsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#provider_config DataDatabricksLakewatchBuiltinParserVersions#provider_config}.

---

### DataDatabricksLakewatchBuiltinParserVersionsProviderConfig <a name="DataDatabricksLakewatchBuiltinParserVersionsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_builtin_parser_versions

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#workspace_id DataDatabricksLakewatchBuiltinParserVersions#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#workspace_id DataDatabricksLakewatchBuiltinParserVersions#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_builtin_parser_versions

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions</a>]

---


### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_builtin_parser_versions

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parser_versions#workspace_id DataDatabricksLakewatchBuiltinParserVersions#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.parserName">parser_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.spec">spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `parser_name`<sup>Required</sup> <a name="parser_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.parserName"></a>

```python
parser_name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.spec"></a>

```python
spec: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.tags"></a>

```python
tags: DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersions</a>

---


### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_builtin_parser_versions

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsProviderConfig</a>

---


### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_builtin_parser_versions

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags</a>]

---


### DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference <a name="DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_builtin_parser_versions

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags">DataDatabricksLakewatchBuiltinParserVersionsBuiltinParserVersionsTags</a>

---


### DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference <a name="DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_builtin_parser_versions

dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchBuiltinParserVersionsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParserVersions.DataDatabricksLakewatchBuiltinParserVersionsProviderConfig">DataDatabricksLakewatchBuiltinParserVersionsProviderConfig</a>

---



