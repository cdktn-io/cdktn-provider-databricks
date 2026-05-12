# `dataDatabricksTagPolicies` Submodule <a name="`dataDatabricksTagPolicies` Submodule" id="@cdktn/provider-databricks.dataDatabricksTagPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksTagPolicies <a name="DataDatabricksTagPolicies" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies databricks_tag_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPolicies(
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
  provider_config: DataDatabricksTagPoliciesProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#page_size DataDatabricksTagPolicies#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfig">DataDatabricksTagPoliciesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#provider_config DataDatabricksTagPolicies#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#page_size DataDatabricksTagPolicies#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfig">DataDatabricksTagPoliciesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#provider_config DataDatabricksTagPolicies#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#workspace_id DataDatabricksTagPolicies#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksTagPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksTagPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksTagPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksTagPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksTagPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference">DataDatabricksTagPoliciesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.tagPolicies">tag_policies</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList">DataDatabricksTagPoliciesTagPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfig">DataDatabricksTagPoliciesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.providerConfig"></a>

```python
provider_config: DataDatabricksTagPoliciesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference">DataDatabricksTagPoliciesProviderConfigOutputReference</a>

---

##### `tag_policies`<sup>Required</sup> <a name="tag_policies" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.tagPolicies"></a>

```python
tag_policies: DataDatabricksTagPoliciesTagPoliciesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList">DataDatabricksTagPoliciesTagPoliciesList</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksTagPoliciesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfig">DataDatabricksTagPoliciesProviderConfig</a>

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksTagPoliciesConfig <a name="DataDatabricksTagPoliciesConfig" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksTagPoliciesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#page_size DataDatabricksTagPolicies#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfig">DataDatabricksTagPoliciesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#provider_config DataDatabricksTagPolicies#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#page_size DataDatabricksTagPolicies#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksTagPoliciesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfig">DataDatabricksTagPoliciesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#provider_config DataDatabricksTagPolicies#provider_config}.

---

### DataDatabricksTagPoliciesProviderConfig <a name="DataDatabricksTagPoliciesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#workspace_id DataDatabricksTagPolicies#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#workspace_id DataDatabricksTagPolicies#workspace_id}.

---

### DataDatabricksTagPoliciesTagPolicies <a name="DataDatabricksTagPoliciesTagPolicies" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies(
  tag_key: str,
  provider_config: DataDatabricksTagPoliciesTagPoliciesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#tag_key DataDatabricksTagPolicies#tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfig">DataDatabricksTagPoliciesTagPoliciesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#provider_config DataDatabricksTagPolicies#provider_config}. |

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#tag_key DataDatabricksTagPolicies#tag_key}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies.property.providerConfig"></a>

```python
provider_config: DataDatabricksTagPoliciesTagPoliciesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfig">DataDatabricksTagPoliciesTagPoliciesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#provider_config DataDatabricksTagPolicies#provider_config}.

---

### DataDatabricksTagPoliciesTagPoliciesProviderConfig <a name="DataDatabricksTagPoliciesTagPoliciesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#workspace_id DataDatabricksTagPolicies#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#workspace_id DataDatabricksTagPolicies#workspace_id}.

---

### DataDatabricksTagPoliciesTagPoliciesValues <a name="DataDatabricksTagPoliciesTagPoliciesValues" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#name DataDatabricksTagPolicies#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#name DataDatabricksTagPolicies#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksTagPoliciesProviderConfigOutputReference <a name="DataDatabricksTagPoliciesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfig">DataDatabricksTagPoliciesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksTagPoliciesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesProviderConfig">DataDatabricksTagPoliciesProviderConfig</a>

---


### DataDatabricksTagPoliciesTagPoliciesList <a name="DataDatabricksTagPoliciesTagPoliciesList" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksTagPoliciesTagPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies">DataDatabricksTagPoliciesTagPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksTagPoliciesTagPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies">DataDatabricksTagPoliciesTagPolicies</a>]

---


### DataDatabricksTagPoliciesTagPoliciesOutputReference <a name="DataDatabricksTagPoliciesTagPoliciesOutputReference" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/data-sources/tag_policies#workspace_id DataDatabricksTagPolicies#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference">DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.values">values</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList">DataDatabricksTagPoliciesTagPoliciesValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfig">DataDatabricksTagPoliciesTagPoliciesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies">DataDatabricksTagPoliciesTagPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference">DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.values"></a>

```python
values: DataDatabricksTagPoliciesTagPoliciesValuesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList">DataDatabricksTagPoliciesTagPoliciesValuesList</a>

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksTagPoliciesTagPoliciesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfig">DataDatabricksTagPoliciesTagPoliciesProviderConfig</a>

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksTagPoliciesTagPolicies
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPolicies">DataDatabricksTagPoliciesTagPolicies</a>

---


### DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference <a name="DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfig">DataDatabricksTagPoliciesTagPoliciesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksTagPoliciesTagPoliciesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesProviderConfig">DataDatabricksTagPoliciesTagPoliciesProviderConfig</a>

---


### DataDatabricksTagPoliciesTagPoliciesValuesList <a name="DataDatabricksTagPoliciesTagPoliciesValuesList" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksTagPoliciesTagPoliciesValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues">DataDatabricksTagPoliciesTagPoliciesValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksTagPoliciesTagPoliciesValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues">DataDatabricksTagPoliciesTagPoliciesValues</a>]

---


### DataDatabricksTagPoliciesTagPoliciesValuesOutputReference <a name="DataDatabricksTagPoliciesTagPoliciesValuesOutputReference" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_tag_policies

dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues">DataDatabricksTagPoliciesTagPoliciesValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValuesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksTagPoliciesTagPoliciesValues
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksTagPolicies.DataDatabricksTagPoliciesTagPoliciesValues">DataDatabricksTagPoliciesTagPoliciesValues</a>

---



