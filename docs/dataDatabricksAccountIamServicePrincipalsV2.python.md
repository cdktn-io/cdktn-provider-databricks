# `dataDatabricksAccountIamServicePrincipalsV2` Submodule <a name="`dataDatabricksAccountIamServicePrincipalsV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountIamServicePrincipalsV2 <a name="DataDatabricksAccountIamServicePrincipalsV2" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2 databricks_account_iam_service_principals_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_account_iam_service_principals_v2

dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: str = None,
  page_size: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2#filter DataDatabricksAccountIamServicePrincipalsV2#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2#page_size DataDatabricksAccountIamServicePrincipalsV2#page_size}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2#filter DataDatabricksAccountIamServicePrincipalsV2#filter}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2#page_size DataDatabricksAccountIamServicePrincipalsV2#page_size}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.resetPageSize">reset_page_size</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.resetPageSize"></a>

```python
def reset_page_size() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksAccountIamServicePrincipalsV2 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_account_iam_service_principals_v2

dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_account_iam_service_principals_v2

dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_account_iam_service_principals_v2

dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_account_iam_service_principals_v2

dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksAccountIamServicePrincipalsV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAccountIamServicePrincipalsV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAccountIamServicePrincipalsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountIamServicePrincipalsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.servicePrincipals">service_principals</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList">DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `service_principals`<sup>Required</sup> <a name="service_principals" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.servicePrincipals"></a>

```python
service_principals: DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList">DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountIamServicePrincipalsV2Config <a name="DataDatabricksAccountIamServicePrincipalsV2Config" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_account_iam_service_principals_v2

dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: str = None,
  page_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2#filter DataDatabricksAccountIamServicePrincipalsV2#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2#page_size DataDatabricksAccountIamServicePrincipalsV2#page_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2#filter DataDatabricksAccountIamServicePrincipalsV2#filter}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2#page_size DataDatabricksAccountIamServicePrincipalsV2#page_size}.

---

### DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals <a name="DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_account_iam_service_principals_v2

dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals(
  service_principal_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2#service_principal_id DataDatabricksAccountIamServicePrincipalsV2#service_principal_id}. |

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2#service_principal_id DataDatabricksAccountIamServicePrincipalsV2#service_principal_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList <a name="DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_account_iam_service_principals_v2

dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals">DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals">DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals</a>]

---


### DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference <a name="DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_account_iam_service_principals_v2

dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountSpStatus">account_sp_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalIdInput">service_principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalId">service_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals">DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `account_sp_status`<sup>Required</sup> <a name="account_sp_status" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountSpStatus"></a>

```python
account_sp_status: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `service_principal_id_input`<sup>Optional</sup> <a name="service_principal_id_input" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalIdInput"></a>

```python
service_principal_id_input: str
```

- *Type:* str

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalId"></a>

```python
service_principal_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals">DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals</a>

---



