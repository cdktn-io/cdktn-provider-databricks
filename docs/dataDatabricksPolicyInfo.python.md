# `dataDatabricksPolicyInfo` Submodule <a name="`dataDatabricksPolicyInfo` Submodule" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPolicyInfo <a name="DataDatabricksPolicyInfo" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info databricks_policy_info}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfo(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  on_securable_fullname: str,
  on_securable_type: str,
  provider_config: DataDatabricksPolicyInfoProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#name DataDatabricksPolicyInfo#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.onSecurableFullname">on_securable_fullname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#on_securable_fullname DataDatabricksPolicyInfo#on_securable_fullname}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.onSecurableType">on_securable_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#on_securable_type DataDatabricksPolicyInfo#on_securable_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#provider_config DataDatabricksPolicyInfo#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#name DataDatabricksPolicyInfo#name}.

---

##### `on_securable_fullname`<sup>Required</sup> <a name="on_securable_fullname" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.onSecurableFullname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#on_securable_fullname DataDatabricksPolicyInfo#on_securable_fullname}.

---

##### `on_securable_type`<sup>Required</sup> <a name="on_securable_type" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.onSecurableType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#on_securable_type DataDatabricksPolicyInfo#on_securable_type}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#provider_config DataDatabricksPolicyInfo#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#workspace_id DataDatabricksPolicyInfo#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksPolicyInfo resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksPolicyInfo resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksPolicyInfo to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksPolicyInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPolicyInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.columnMask">column_mask</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference">DataDatabricksPolicyInfoColumnMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.deny">deny</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference">DataDatabricksPolicyInfoDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.exceptPrincipals">except_principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forSecurableType">for_securable_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.grant">grant</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference">DataDatabricksPolicyInfoGrantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.matchColumns">match_columns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList">DataDatabricksPolicyInfoMatchColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference">DataDatabricksPolicyInfoProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.rowFilter">row_filter</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference">DataDatabricksPolicyInfoRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.toPrincipals">to_principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.whenCondition">when_condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullnameInput">on_securable_fullname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableTypeInput">on_securable_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullname">on_securable_fullname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableType">on_securable_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `column_mask`<sup>Required</sup> <a name="column_mask" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.columnMask"></a>

```python
column_mask: DataDatabricksPolicyInfoColumnMaskOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference">DataDatabricksPolicyInfoColumnMaskOutputReference</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.deny"></a>

```python
deny: DataDatabricksPolicyInfoDenyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference">DataDatabricksPolicyInfoDenyOutputReference</a>

---

##### `except_principals`<sup>Required</sup> <a name="except_principals" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.exceptPrincipals"></a>

```python
except_principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_securable_type`<sup>Required</sup> <a name="for_securable_type" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forSecurableType"></a>

```python
for_securable_type: str
```

- *Type:* str

---

##### `grant`<sup>Required</sup> <a name="grant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.grant"></a>

```python
grant: DataDatabricksPolicyInfoGrantOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference">DataDatabricksPolicyInfoGrantOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `match_columns`<sup>Required</sup> <a name="match_columns" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.matchColumns"></a>

```python
match_columns: DataDatabricksPolicyInfoMatchColumnsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList">DataDatabricksPolicyInfoMatchColumnsList</a>

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.providerConfig"></a>

```python
provider_config: DataDatabricksPolicyInfoProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference">DataDatabricksPolicyInfoProviderConfigOutputReference</a>

---

##### `row_filter`<sup>Required</sup> <a name="row_filter" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.rowFilter"></a>

```python
row_filter: DataDatabricksPolicyInfoRowFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference">DataDatabricksPolicyInfoRowFilterOutputReference</a>

---

##### `to_principals`<sup>Required</sup> <a name="to_principals" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.toPrincipals"></a>

```python
to_principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `when_condition`<sup>Required</sup> <a name="when_condition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.whenCondition"></a>

```python
when_condition: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `on_securable_fullname_input`<sup>Optional</sup> <a name="on_securable_fullname_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullnameInput"></a>

```python
on_securable_fullname_input: str
```

- *Type:* str

---

##### `on_securable_type_input`<sup>Optional</sup> <a name="on_securable_type_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableTypeInput"></a>

```python
on_securable_type_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksPolicyInfoProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `on_securable_fullname`<sup>Required</sup> <a name="on_securable_fullname" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullname"></a>

```python
on_securable_fullname: str
```

- *Type:* str

---

##### `on_securable_type`<sup>Required</sup> <a name="on_securable_type" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableType"></a>

```python
on_securable_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPolicyInfoColumnMask <a name="DataDatabricksPolicyInfoColumnMask" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask(
  function_name: str,
  on_column: str,
  using: IResolvable | typing.List[DataDatabricksPolicyInfoColumnMaskUsing] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.onColumn">on_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#on_column DataDatabricksPolicyInfo#on_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.using">using</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}. |

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}.

---

##### `on_column`<sup>Required</sup> <a name="on_column" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.onColumn"></a>

```python
on_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#on_column DataDatabricksPolicyInfo#on_column}.

---

##### `using`<sup>Optional</sup> <a name="using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.using"></a>

```python
using: IResolvable | typing.List[DataDatabricksPolicyInfoColumnMaskUsing]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}.

---

### DataDatabricksPolicyInfoColumnMaskUsing <a name="DataDatabricksPolicyInfoColumnMaskUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing(
  alias: str = None,
  constant: str = None,
  function_arg_expression: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.constant">constant</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.functionArgExpression">function_arg_expression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#function_arg_expression DataDatabricksPolicyInfo#function_arg_expression}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}.

---

##### `constant`<sup>Optional</sup> <a name="constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.constant"></a>

```python
constant: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}.

---

##### `function_arg_expression`<sup>Optional</sup> <a name="function_arg_expression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.functionArgExpression"></a>

```python
function_arg_expression: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#function_arg_expression DataDatabricksPolicyInfo#function_arg_expression}.

---

### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression(
  tag_introspection: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression.property.tagIntrospection">tag_introspection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_introspection DataDatabricksPolicyInfo#tag_introspection}. |

---

##### `tag_introspection`<sup>Optional</sup> <a name="tag_introspection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression.property.tagIntrospection"></a>

```python
tag_introspection: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_introspection DataDatabricksPolicyInfo#tag_introspection}.

---

### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection(
  column_tag_value: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue = None,
  tag_value: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.property.columnTagValue">column_tag_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#column_tag_value DataDatabricksPolicyInfo#column_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.property.tagValue">tag_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_value DataDatabricksPolicyInfo#tag_value}. |

---

##### `column_tag_value`<sup>Optional</sup> <a name="column_tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.property.columnTagValue"></a>

```python
column_tag_value: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#column_tag_value DataDatabricksPolicyInfo#column_tag_value}.

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.property.tagValue"></a>

```python
tag_value: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_value DataDatabricksPolicyInfo#tag_value}.

---

### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue(
  column_alias: str,
  tag_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias">column_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#column_alias DataDatabricksPolicyInfo#column_alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}. |

---

##### `column_alias`<sup>Required</sup> <a name="column_alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias"></a>

```python
column_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#column_alias DataDatabricksPolicyInfo#column_alias}.

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}.

---

### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue(
  tag_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}. |

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}.

---

### DataDatabricksPolicyInfoConfig <a name="DataDatabricksPolicyInfoConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  on_securable_fullname: str,
  on_securable_type: str,
  provider_config: DataDatabricksPolicyInfoProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#name DataDatabricksPolicyInfo#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableFullname">on_securable_fullname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#on_securable_fullname DataDatabricksPolicyInfo#on_securable_fullname}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableType">on_securable_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#on_securable_type DataDatabricksPolicyInfo#on_securable_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#provider_config DataDatabricksPolicyInfo#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#name DataDatabricksPolicyInfo#name}.

---

##### `on_securable_fullname`<sup>Required</sup> <a name="on_securable_fullname" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableFullname"></a>

```python
on_securable_fullname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#on_securable_fullname DataDatabricksPolicyInfo#on_securable_fullname}.

---

##### `on_securable_type`<sup>Required</sup> <a name="on_securable_type" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableType"></a>

```python
on_securable_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#on_securable_type DataDatabricksPolicyInfo#on_securable_type}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksPolicyInfoProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#provider_config DataDatabricksPolicyInfo#provider_config}.

---

### DataDatabricksPolicyInfoDeny <a name="DataDatabricksPolicyInfoDeny" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDeny"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDeny.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDeny(
  privileges: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDeny.property.privileges">privileges</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#privileges DataDatabricksPolicyInfo#privileges}. |

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDeny.property.privileges"></a>

```python
privileges: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#privileges DataDatabricksPolicyInfo#privileges}.

---

### DataDatabricksPolicyInfoGrant <a name="DataDatabricksPolicyInfoGrant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant(
  privileges: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant.property.privileges">privileges</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#privileges DataDatabricksPolicyInfo#privileges}. |

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant.property.privileges"></a>

```python
privileges: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#privileges DataDatabricksPolicyInfo#privileges}.

---

### DataDatabricksPolicyInfoMatchColumns <a name="DataDatabricksPolicyInfoMatchColumns" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns(
  alias: str = None,
  condition: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#condition DataDatabricksPolicyInfo#condition}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#condition DataDatabricksPolicyInfo#condition}.

---

### DataDatabricksPolicyInfoProviderConfig <a name="DataDatabricksPolicyInfoProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#workspace_id DataDatabricksPolicyInfo#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#workspace_id DataDatabricksPolicyInfo#workspace_id}.

---

### DataDatabricksPolicyInfoRowFilter <a name="DataDatabricksPolicyInfoRowFilter" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter(
  function_name: str,
  using: IResolvable | typing.List[DataDatabricksPolicyInfoRowFilterUsing] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.using">using</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}. |

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}.

---

##### `using`<sup>Optional</sup> <a name="using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.using"></a>

```python
using: IResolvable | typing.List[DataDatabricksPolicyInfoRowFilterUsing]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}.

---

### DataDatabricksPolicyInfoRowFilterUsing <a name="DataDatabricksPolicyInfoRowFilterUsing" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing(
  alias: str = None,
  constant: str = None,
  function_arg_expression: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.constant">constant</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.functionArgExpression">function_arg_expression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#function_arg_expression DataDatabricksPolicyInfo#function_arg_expression}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}.

---

##### `constant`<sup>Optional</sup> <a name="constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.constant"></a>

```python
constant: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}.

---

##### `function_arg_expression`<sup>Optional</sup> <a name="function_arg_expression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.functionArgExpression"></a>

```python
function_arg_expression: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#function_arg_expression DataDatabricksPolicyInfo#function_arg_expression}.

---

### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression(
  tag_introspection: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression.property.tagIntrospection">tag_introspection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_introspection DataDatabricksPolicyInfo#tag_introspection}. |

---

##### `tag_introspection`<sup>Optional</sup> <a name="tag_introspection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression.property.tagIntrospection"></a>

```python
tag_introspection: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_introspection DataDatabricksPolicyInfo#tag_introspection}.

---

### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection(
  column_tag_value: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue = None,
  tag_value: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.property.columnTagValue">column_tag_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#column_tag_value DataDatabricksPolicyInfo#column_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.property.tagValue">tag_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_value DataDatabricksPolicyInfo#tag_value}. |

---

##### `column_tag_value`<sup>Optional</sup> <a name="column_tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.property.columnTagValue"></a>

```python
column_tag_value: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#column_tag_value DataDatabricksPolicyInfo#column_tag_value}.

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.property.tagValue"></a>

```python
tag_value: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_value DataDatabricksPolicyInfo#tag_value}.

---

### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue(
  column_alias: str,
  tag_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias">column_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#column_alias DataDatabricksPolicyInfo#column_alias}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}. |

---

##### `column_alias`<sup>Required</sup> <a name="column_alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias"></a>

```python
column_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#column_alias DataDatabricksPolicyInfo#column_alias}.

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}.

---

### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue(
  tag_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}. |

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPolicyInfoColumnMaskOutputReference <a name="DataDatabricksPolicyInfoColumnMaskOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.putUsing">put_using</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resetUsing">reset_using</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_using` <a name="put_using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.putUsing"></a>

```python
def put_using(
  value: IResolvable | typing.List[DataDatabricksPolicyInfoColumnMaskUsing]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.putUsing.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>]

---

##### `reset_using` <a name="reset_using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resetUsing"></a>

```python
def reset_using() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.using">using</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList">DataDatabricksPolicyInfoColumnMaskUsingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumnInput">on_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.usingInput">using_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumn">on_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask">DataDatabricksPolicyInfoColumnMask</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.using"></a>

```python
using: DataDatabricksPolicyInfoColumnMaskUsingList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList">DataDatabricksPolicyInfoColumnMaskUsingList</a>

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `on_column_input`<sup>Optional</sup> <a name="on_column_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumnInput"></a>

```python
on_column_input: str
```

- *Type:* str

---

##### `using_input`<sup>Optional</sup> <a name="using_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.usingInput"></a>

```python
using_input: IResolvable | typing.List[DataDatabricksPolicyInfoColumnMaskUsing]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `on_column`<sup>Required</sup> <a name="on_column" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumn"></a>

```python
on_column: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPolicyInfoColumnMask
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask">DataDatabricksPolicyInfoColumnMask</a>

---


### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection">put_tag_introspection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resetTagIntrospection">reset_tag_introspection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tag_introspection` <a name="put_tag_introspection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection"></a>

```python
def put_tag_introspection(
  column_tag_value: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue = None,
  tag_value: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue = None
) -> None
```

###### `column_tag_value`<sup>Optional</sup> <a name="column_tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection.parameter.columnTagValue"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#column_tag_value DataDatabricksPolicyInfo#column_tag_value}.

---

###### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection.parameter.tagValue"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_value DataDatabricksPolicyInfo#tag_value}.

---

##### `reset_tag_introspection` <a name="reset_tag_introspection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resetTagIntrospection"></a>

```python
def reset_tag_introspection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospection">tag_introspection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput">tag_introspection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag_introspection`<sup>Required</sup> <a name="tag_introspection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospection"></a>

```python
tag_introspection: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference</a>

---

##### `tag_introspection_input`<sup>Optional</sup> <a name="tag_introspection_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput"></a>

```python
tag_introspection_input: IResolvable | DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression</a>

---


### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput">column_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias">column_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_alias_input`<sup>Optional</sup> <a name="column_alias_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput"></a>

```python
column_alias_input: str
```

- *Type:* str

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `column_alias`<sup>Required</sup> <a name="column_alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias"></a>

```python
column_alias: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---


### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue">put_column_tag_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue">put_tag_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue">reset_column_tag_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue">reset_tag_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column_tag_value` <a name="put_column_tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue"></a>

```python
def put_column_tag_value(
  column_alias: str,
  tag_key: str
) -> None
```

###### `column_alias`<sup>Required</sup> <a name="column_alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue.parameter.columnAlias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#column_alias DataDatabricksPolicyInfo#column_alias}.

---

###### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue.parameter.tagKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}.

---

##### `put_tag_value` <a name="put_tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue"></a>

```python
def put_tag_value(
  tag_key: str
) -> None
```

###### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue.parameter.tagKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}.

---

##### `reset_column_tag_value` <a name="reset_column_tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue"></a>

```python
def reset_column_tag_value() -> None
```

##### `reset_tag_value` <a name="reset_tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue"></a>

```python
def reset_tag_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue">column_tag_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue">tag_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput">column_tag_value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput">tag_value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_tag_value`<sup>Required</sup> <a name="column_tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue"></a>

```python
column_tag_value: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a>

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue"></a>

```python
tag_value: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a>

---

##### `column_tag_value_input`<sup>Optional</sup> <a name="column_tag_value_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput"></a>

```python
column_tag_value_input: IResolvable | DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput"></a>

```python
tag_value_input: IResolvable | DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

---


### DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference <a name="DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---


### DataDatabricksPolicyInfoColumnMaskUsingList <a name="DataDatabricksPolicyInfoColumnMaskUsingList" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksPolicyInfoColumnMaskUsingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksPolicyInfoColumnMaskUsing]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>]

---


### DataDatabricksPolicyInfoColumnMaskUsingOutputReference <a name="DataDatabricksPolicyInfoColumnMaskUsingOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.putFunctionArgExpression">put_function_arg_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetConstant">reset_constant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetFunctionArgExpression">reset_function_arg_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_function_arg_expression` <a name="put_function_arg_expression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.putFunctionArgExpression"></a>

```python
def put_function_arg_expression(
  tag_introspection: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection = None
) -> None
```

###### `tag_introspection`<sup>Optional</sup> <a name="tag_introspection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.putFunctionArgExpression.parameter.tagIntrospection"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_introspection DataDatabricksPolicyInfo#tag_introspection}.

---

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_constant` <a name="reset_constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetConstant"></a>

```python
def reset_constant() -> None
```

##### `reset_function_arg_expression` <a name="reset_function_arg_expression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetFunctionArgExpression"></a>

```python
def reset_function_arg_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.functionArgExpression">function_arg_expression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constantInput">constant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.functionArgExpressionInput">function_arg_expression_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constant">constant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_arg_expression`<sup>Required</sup> <a name="function_arg_expression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.functionArgExpression"></a>

```python
function_arg_expression: DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference</a>

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `constant_input`<sup>Optional</sup> <a name="constant_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constantInput"></a>

```python
constant_input: str
```

- *Type:* str

---

##### `function_arg_expression_input`<sup>Optional</sup> <a name="function_arg_expression_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.functionArgExpressionInput"></a>

```python
function_arg_expression_input: IResolvable | DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression">DataDatabricksPolicyInfoColumnMaskUsingFunctionArgExpression</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constant"></a>

```python
constant: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPolicyInfoColumnMaskUsing
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing">DataDatabricksPolicyInfoColumnMaskUsing</a>

---


### DataDatabricksPolicyInfoDenyOutputReference <a name="DataDatabricksPolicyInfoDenyOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.privilegesInput">privileges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.privileges">privileges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDeny">DataDatabricksPolicyInfoDeny</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `privileges_input`<sup>Optional</sup> <a name="privileges_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.privilegesInput"></a>

```python
privileges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.privileges"></a>

```python
privileges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDenyOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPolicyInfoDeny
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoDeny">DataDatabricksPolicyInfoDeny</a>

---


### DataDatabricksPolicyInfoGrantOutputReference <a name="DataDatabricksPolicyInfoGrantOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.privilegesInput">privileges_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.privileges">privileges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant">DataDatabricksPolicyInfoGrant</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `privileges_input`<sup>Optional</sup> <a name="privileges_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.privilegesInput"></a>

```python
privileges_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.privileges"></a>

```python
privileges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrantOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPolicyInfoGrant
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoGrant">DataDatabricksPolicyInfoGrant</a>

---


### DataDatabricksPolicyInfoMatchColumnsList <a name="DataDatabricksPolicyInfoMatchColumnsList" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksPolicyInfoMatchColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksPolicyInfoMatchColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a>]

---


### DataDatabricksPolicyInfoMatchColumnsOutputReference <a name="DataDatabricksPolicyInfoMatchColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetCondition">reset_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPolicyInfoMatchColumns
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns">DataDatabricksPolicyInfoMatchColumns</a>

---


### DataDatabricksPolicyInfoProviderConfigOutputReference <a name="DataDatabricksPolicyInfoProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPolicyInfoProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoProviderConfig">DataDatabricksPolicyInfoProviderConfig</a>

---


### DataDatabricksPolicyInfoRowFilterOutputReference <a name="DataDatabricksPolicyInfoRowFilterOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.putUsing">put_using</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resetUsing">reset_using</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_using` <a name="put_using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.putUsing"></a>

```python
def put_using(
  value: IResolvable | typing.List[DataDatabricksPolicyInfoRowFilterUsing]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.putUsing.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>]

---

##### `reset_using` <a name="reset_using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resetUsing"></a>

```python
def reset_using() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.using">using</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList">DataDatabricksPolicyInfoRowFilterUsingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.usingInput">using_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter">DataDatabricksPolicyInfoRowFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.using"></a>

```python
using: DataDatabricksPolicyInfoRowFilterUsingList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList">DataDatabricksPolicyInfoRowFilterUsingList</a>

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `using_input`<sup>Optional</sup> <a name="using_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.usingInput"></a>

```python
using_input: IResolvable | typing.List[DataDatabricksPolicyInfoRowFilterUsing]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksPolicyInfoRowFilter
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter">DataDatabricksPolicyInfoRowFilter</a>

---


### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection">put_tag_introspection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resetTagIntrospection">reset_tag_introspection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tag_introspection` <a name="put_tag_introspection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection"></a>

```python
def put_tag_introspection(
  column_tag_value: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue = None,
  tag_value: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue = None
) -> None
```

###### `column_tag_value`<sup>Optional</sup> <a name="column_tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection.parameter.columnTagValue"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#column_tag_value DataDatabricksPolicyInfo#column_tag_value}.

---

###### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection.parameter.tagValue"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_value DataDatabricksPolicyInfo#tag_value}.

---

##### `reset_tag_introspection` <a name="reset_tag_introspection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resetTagIntrospection"></a>

```python
def reset_tag_introspection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospection">tag_introspection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput">tag_introspection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag_introspection`<sup>Required</sup> <a name="tag_introspection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospection"></a>

```python
tag_introspection: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference</a>

---

##### `tag_introspection_input`<sup>Optional</sup> <a name="tag_introspection_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput"></a>

```python
tag_introspection_input: IResolvable | DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression</a>

---


### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput">column_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias">column_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_alias_input`<sup>Optional</sup> <a name="column_alias_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput"></a>

```python
column_alias_input: str
```

- *Type:* str

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `column_alias`<sup>Required</sup> <a name="column_alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias"></a>

```python
column_alias: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---


### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue">put_column_tag_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue">put_tag_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue">reset_column_tag_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue">reset_tag_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column_tag_value` <a name="put_column_tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue"></a>

```python
def put_column_tag_value(
  column_alias: str,
  tag_key: str
) -> None
```

###### `column_alias`<sup>Required</sup> <a name="column_alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue.parameter.columnAlias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#column_alias DataDatabricksPolicyInfo#column_alias}.

---

###### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue.parameter.tagKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}.

---

##### `put_tag_value` <a name="put_tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue"></a>

```python
def put_tag_value(
  tag_key: str
) -> None
```

###### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue.parameter.tagKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_key DataDatabricksPolicyInfo#tag_key}.

---

##### `reset_column_tag_value` <a name="reset_column_tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue"></a>

```python
def reset_column_tag_value() -> None
```

##### `reset_tag_value` <a name="reset_tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue"></a>

```python
def reset_tag_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue">column_tag_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue">tag_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput">column_tag_value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput">tag_value_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_tag_value`<sup>Required</sup> <a name="column_tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue"></a>

```python
column_tag_value: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a>

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue"></a>

```python
tag_value: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a>

---

##### `column_tag_value_input`<sup>Optional</sup> <a name="column_tag_value_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput"></a>

```python
column_tag_value_input: IResolvable | DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput"></a>

```python
tag_value_input: IResolvable | DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a>

---


### DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference <a name="DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---


### DataDatabricksPolicyInfoRowFilterUsingList <a name="DataDatabricksPolicyInfoRowFilterUsingList" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksPolicyInfoRowFilterUsingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksPolicyInfoRowFilterUsing]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>]

---


### DataDatabricksPolicyInfoRowFilterUsingOutputReference <a name="DataDatabricksPolicyInfoRowFilterUsingOutputReference" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_policy_info

dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.putFunctionArgExpression">put_function_arg_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetConstant">reset_constant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetFunctionArgExpression">reset_function_arg_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_function_arg_expression` <a name="put_function_arg_expression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.putFunctionArgExpression"></a>

```python
def put_function_arg_expression(
  tag_introspection: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection = None
) -> None
```

###### `tag_introspection`<sup>Optional</sup> <a name="tag_introspection" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.putFunctionArgExpression.parameter.tagIntrospection"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/data-sources/policy_info#tag_introspection DataDatabricksPolicyInfo#tag_introspection}.

---

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_constant` <a name="reset_constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetConstant"></a>

```python
def reset_constant() -> None
```

##### `reset_function_arg_expression` <a name="reset_function_arg_expression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetFunctionArgExpression"></a>

```python
def reset_function_arg_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.functionArgExpression">function_arg_expression</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constantInput">constant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.functionArgExpressionInput">function_arg_expression_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constant">constant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_arg_expression`<sup>Required</sup> <a name="function_arg_expression" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.functionArgExpression"></a>

```python
function_arg_expression: DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpressionOutputReference</a>

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `constant_input`<sup>Optional</sup> <a name="constant_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constantInput"></a>

```python
constant_input: str
```

- *Type:* str

---

##### `function_arg_expression_input`<sup>Optional</sup> <a name="function_arg_expression_input" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.functionArgExpressionInput"></a>

```python
function_arg_expression_input: IResolvable | DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression">DataDatabricksPolicyInfoRowFilterUsingFunctionArgExpression</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constant"></a>

```python
constant: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksPolicyInfoRowFilterUsing
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing">DataDatabricksPolicyInfoRowFilterUsing</a>

---



