# `dataDatabricksLakewatchRule` Submodule <a name="`dataDatabricksLakewatchRule` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchRule <a name="DataDatabricksLakewatchRule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule databricks_lakewatch_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRule(
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
  provider_config: DataDatabricksLakewatchRuleProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#name DataDatabricksLakewatchRule#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig">DataDatabricksLakewatchRuleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#provider_config DataDatabricksLakewatchRule#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#name DataDatabricksLakewatchRule#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig">DataDatabricksLakewatchRuleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#provider_config DataDatabricksLakewatchRule#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#workspace_id DataDatabricksLakewatchRule#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksLakewatchRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksLakewatchRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksLakewatchRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.annotations">annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.batch">batch</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference">DataDatabricksLakewatchRuleBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.computeWorkspaceId">compute_workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.contentResourceId">content_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.createdBy">created_by</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference">DataDatabricksLakewatchRuleCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.deduplication">deduplication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.deduplicationTimeWindow">deduplication_time_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.effectiveCatalogName">effective_catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.effectiveRuleName">effective_rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.effectiveRunAsPrincipal">effective_run_as_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.effectiveSchemaName">effective_schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.fidelity">fidelity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.mitre">mitre</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList">DataDatabricksLakewatchRuleMitreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.objective">objective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.originalContentPack">original_content_pack</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference">DataDatabricksLakewatchRuleOriginalContentPackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.output">output</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference">DataDatabricksLakewatchRuleOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.owner">owner</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference">DataDatabricksLakewatchRuleOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference">DataDatabricksLakewatchRuleProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.references">references</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.runAsPrincipal">run_as_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.runbook">runbook</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference">DataDatabricksLakewatchRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference">DataDatabricksLakewatchRuleStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.suppressUntilTime">suppress_until_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.timerange">timerange</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference">DataDatabricksLakewatchRuleTimerangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.updatedBy">updated_by</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference">DataDatabricksLakewatchRuleUpdatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig">DataDatabricksLakewatchRuleProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.annotations"></a>

```python
annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `batch`<sup>Required</sup> <a name="batch" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.batch"></a>

```python
batch: DataDatabricksLakewatchRuleBatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference">DataDatabricksLakewatchRuleBatchOutputReference</a>

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `compute_workspace_id`<sup>Required</sup> <a name="compute_workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.computeWorkspaceId"></a>

```python
compute_workspace_id: str
```

- *Type:* str

---

##### `content_resource_id`<sup>Required</sup> <a name="content_resource_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.contentResourceId"></a>

```python
content_resource_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.createdBy"></a>

```python
created_by: DataDatabricksLakewatchRuleCreatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference">DataDatabricksLakewatchRuleCreatedByOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `deduplication`<sup>Required</sup> <a name="deduplication" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.deduplication"></a>

```python
deduplication: str
```

- *Type:* str

---

##### `deduplication_time_window`<sup>Required</sup> <a name="deduplication_time_window" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.deduplicationTimeWindow"></a>

```python
deduplication_time_window: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effective_catalog_name`<sup>Required</sup> <a name="effective_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.effectiveCatalogName"></a>

```python
effective_catalog_name: str
```

- *Type:* str

---

##### `effective_rule_name`<sup>Required</sup> <a name="effective_rule_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.effectiveRuleName"></a>

```python
effective_rule_name: str
```

- *Type:* str

---

##### `effective_run_as_principal`<sup>Required</sup> <a name="effective_run_as_principal" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.effectiveRunAsPrincipal"></a>

```python
effective_run_as_principal: str
```

- *Type:* str

---

##### `effective_schema_name`<sup>Required</sup> <a name="effective_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.effectiveSchemaName"></a>

```python
effective_schema_name: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `fidelity`<sup>Required</sup> <a name="fidelity" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.fidelity"></a>

```python
fidelity: str
```

- *Type:* str

---

##### `mitre`<sup>Required</sup> <a name="mitre" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.mitre"></a>

```python
mitre: DataDatabricksLakewatchRuleMitreList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList">DataDatabricksLakewatchRuleMitreList</a>

---

##### `objective`<sup>Required</sup> <a name="objective" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.objective"></a>

```python
objective: str
```

- *Type:* str

---

##### `original_content_pack`<sup>Required</sup> <a name="original_content_pack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.originalContentPack"></a>

```python
original_content_pack: DataDatabricksLakewatchRuleOriginalContentPackOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference">DataDatabricksLakewatchRuleOriginalContentPackOutputReference</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.output"></a>

```python
output: DataDatabricksLakewatchRuleOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference">DataDatabricksLakewatchRuleOutputOutputReference</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.owner"></a>

```python
owner: DataDatabricksLakewatchRuleOwnerOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference">DataDatabricksLakewatchRuleOwnerOutputReference</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchRuleProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference">DataDatabricksLakewatchRuleProviderConfigOutputReference</a>

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.references"></a>

```python
references: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

##### `run_as_principal`<sup>Required</sup> <a name="run_as_principal" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.runAsPrincipal"></a>

```python
run_as_principal: str
```

- *Type:* str

---

##### `runbook`<sup>Required</sup> <a name="runbook" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.runbook"></a>

```python
runbook: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.schedule"></a>

```python
schedule: DataDatabricksLakewatchRuleScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference">DataDatabricksLakewatchRuleScheduleOutputReference</a>

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.status"></a>

```python
status: DataDatabricksLakewatchRuleStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference">DataDatabricksLakewatchRuleStatusOutputReference</a>

---

##### `suppress_until_time`<sup>Required</sup> <a name="suppress_until_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.suppressUntilTime"></a>

```python
suppress_until_time: str
```

- *Type:* str

---

##### `timerange`<sup>Required</sup> <a name="timerange" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.timerange"></a>

```python
timerange: DataDatabricksLakewatchRuleTimerangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference">DataDatabricksLakewatchRuleTimerangeOutputReference</a>

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.updatedBy"></a>

```python
updated_by: DataDatabricksLakewatchRuleUpdatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference">DataDatabricksLakewatchRuleUpdatedByOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksLakewatchRuleProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig">DataDatabricksLakewatchRuleProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchRuleBatch <a name="DataDatabricksLakewatchRuleBatch" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch(
  custom: DataDatabricksLakewatchRuleBatchCustom = None,
  sql: DataDatabricksLakewatchRuleBatchSql = None,
  warehouse_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom">DataDatabricksLakewatchRuleBatchCustom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#custom DataDatabricksLakewatchRule#custom}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch.property.sql">sql</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql">DataDatabricksLakewatchRuleBatchSql</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#sql DataDatabricksLakewatchRule#sql}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch.property.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#warehouse_id DataDatabricksLakewatchRule#warehouse_id}. |

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch.property.custom"></a>

```python
custom: DataDatabricksLakewatchRuleBatchCustom
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom">DataDatabricksLakewatchRuleBatchCustom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#custom DataDatabricksLakewatchRule#custom}.

---

##### `sql`<sup>Optional</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch.property.sql"></a>

```python
sql: DataDatabricksLakewatchRuleBatchSql
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql">DataDatabricksLakewatchRuleBatchSql</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#sql DataDatabricksLakewatchRule#sql}.

---

##### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#warehouse_id DataDatabricksLakewatchRule#warehouse_id}.

---

### DataDatabricksLakewatchRuleBatchCustom <a name="DataDatabricksLakewatchRuleBatchCustom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom(
  notebook: str,
  options: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom.property.notebook">notebook</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#notebook DataDatabricksLakewatchRule#notebook}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#options DataDatabricksLakewatchRule#options}. |

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom.property.notebook"></a>

```python
notebook: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#notebook DataDatabricksLakewatchRule#notebook}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#options DataDatabricksLakewatchRule#options}.

---

### DataDatabricksLakewatchRuleBatchSql <a name="DataDatabricksLakewatchRuleBatchSql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql(
  query: str,
  default_catalog_name: str = None,
  default_schema_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#query DataDatabricksLakewatchRule#query}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql.property.defaultCatalogName">default_catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#default_catalog_name DataDatabricksLakewatchRule#default_catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql.property.defaultSchemaName">default_schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#default_schema_name DataDatabricksLakewatchRule#default_schema_name}. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#query DataDatabricksLakewatchRule#query}.

---

##### `default_catalog_name`<sup>Optional</sup> <a name="default_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql.property.defaultCatalogName"></a>

```python
default_catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#default_catalog_name DataDatabricksLakewatchRule#default_catalog_name}.

---

##### `default_schema_name`<sup>Optional</sup> <a name="default_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql.property.defaultSchemaName"></a>

```python
default_schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#default_schema_name DataDatabricksLakewatchRule#default_schema_name}.

---

### DataDatabricksLakewatchRuleConfig <a name="DataDatabricksLakewatchRuleConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksLakewatchRuleProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#name DataDatabricksLakewatchRule#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig">DataDatabricksLakewatchRuleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#provider_config DataDatabricksLakewatchRule#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#name DataDatabricksLakewatchRule#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksLakewatchRuleProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig">DataDatabricksLakewatchRuleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#provider_config DataDatabricksLakewatchRule#provider_config}.

---

### DataDatabricksLakewatchRuleCreatedBy <a name="DataDatabricksLakewatchRuleCreatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#display_name DataDatabricksLakewatchRule#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#email DataDatabricksLakewatchRule#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#id DataDatabricksLakewatchRule#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#principal_type DataDatabricksLakewatchRule#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#display_name DataDatabricksLakewatchRule#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#email DataDatabricksLakewatchRule#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#id DataDatabricksLakewatchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#principal_type DataDatabricksLakewatchRule#principal_type}.

---

### DataDatabricksLakewatchRuleMitre <a name="DataDatabricksLakewatchRuleMitre" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre(
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.subTechnique">sub_technique</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#sub_technique DataDatabricksLakewatchRule#sub_technique}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.subTechniqueId">sub_technique_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#sub_technique_id DataDatabricksLakewatchRule#sub_technique_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.tactic">tactic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#tactic DataDatabricksLakewatchRule#tactic}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.taxonomy">taxonomy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#taxonomy DataDatabricksLakewatchRule#taxonomy}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.technique">technique</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#technique DataDatabricksLakewatchRule#technique}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.techniqueId">technique_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#technique_id DataDatabricksLakewatchRule#technique_id}. |

---

##### `sub_technique`<sup>Optional</sup> <a name="sub_technique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.subTechnique"></a>

```python
sub_technique: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#sub_technique DataDatabricksLakewatchRule#sub_technique}.

---

##### `sub_technique_id`<sup>Optional</sup> <a name="sub_technique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.subTechniqueId"></a>

```python
sub_technique_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#sub_technique_id DataDatabricksLakewatchRule#sub_technique_id}.

---

##### `tactic`<sup>Optional</sup> <a name="tactic" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.tactic"></a>

```python
tactic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#tactic DataDatabricksLakewatchRule#tactic}.

---

##### `taxonomy`<sup>Optional</sup> <a name="taxonomy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.taxonomy"></a>

```python
taxonomy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#taxonomy DataDatabricksLakewatchRule#taxonomy}.

---

##### `technique`<sup>Optional</sup> <a name="technique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.technique"></a>

```python
technique: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#technique DataDatabricksLakewatchRule#technique}.

---

##### `technique_id`<sup>Optional</sup> <a name="technique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre.property.techniqueId"></a>

```python
technique_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#technique_id DataDatabricksLakewatchRule#technique_id}.

---

### DataDatabricksLakewatchRuleOriginalContentPack <a name="DataDatabricksLakewatchRuleOriginalContentPack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPack.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPack()
```


### DataDatabricksLakewatchRuleOutput <a name="DataDatabricksLakewatchRuleOutput" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput(
  context: typing.Mapping[str] = None,
  default_context: bool | IResolvable = None,
  event_time_column: str = None,
  summary: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput.property.context">context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#context DataDatabricksLakewatchRule#context}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput.property.defaultContext">default_context</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#default_context DataDatabricksLakewatchRule#default_context}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput.property.eventTimeColumn">event_time_column</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#event_time_column DataDatabricksLakewatchRule#event_time_column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput.property.summary">summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#summary DataDatabricksLakewatchRule#summary}. |

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput.property.context"></a>

```python
context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#context DataDatabricksLakewatchRule#context}.

---

##### `default_context`<sup>Optional</sup> <a name="default_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput.property.defaultContext"></a>

```python
default_context: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#default_context DataDatabricksLakewatchRule#default_context}.

---

##### `event_time_column`<sup>Optional</sup> <a name="event_time_column" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput.property.eventTimeColumn"></a>

```python
event_time_column: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#event_time_column DataDatabricksLakewatchRule#event_time_column}.

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput.property.summary"></a>

```python
summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#summary DataDatabricksLakewatchRule#summary}.

---

### DataDatabricksLakewatchRuleOwner <a name="DataDatabricksLakewatchRuleOwner" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#display_name DataDatabricksLakewatchRule#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#email DataDatabricksLakewatchRule#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#id DataDatabricksLakewatchRule#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#principal_type DataDatabricksLakewatchRule#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#display_name DataDatabricksLakewatchRule#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#email DataDatabricksLakewatchRule#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#id DataDatabricksLakewatchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#principal_type DataDatabricksLakewatchRule#principal_type}.

---

### DataDatabricksLakewatchRuleProviderConfig <a name="DataDatabricksLakewatchRuleProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#workspace_id DataDatabricksLakewatchRule#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#workspace_id DataDatabricksLakewatchRule#workspace_id}.

---

### DataDatabricksLakewatchRuleSchedule <a name="DataDatabricksLakewatchRuleSchedule" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule(
  at_least_every: str = None,
  continuous: bool | IResolvable = None,
  cron_expression: str = None,
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule.property.atLeastEvery">at_least_every</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#at_least_every DataDatabricksLakewatchRule#at_least_every}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule.property.continuous">continuous</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#continuous DataDatabricksLakewatchRule#continuous}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule.property.cronExpression">cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#cron_expression DataDatabricksLakewatchRule#cron_expression}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#enabled DataDatabricksLakewatchRule#enabled}. |

---

##### `at_least_every`<sup>Optional</sup> <a name="at_least_every" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule.property.atLeastEvery"></a>

```python
at_least_every: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#at_least_every DataDatabricksLakewatchRule#at_least_every}.

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule.property.continuous"></a>

```python
continuous: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#continuous DataDatabricksLakewatchRule#continuous}.

---

##### `cron_expression`<sup>Optional</sup> <a name="cron_expression" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#cron_expression DataDatabricksLakewatchRule#cron_expression}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#enabled DataDatabricksLakewatchRule#enabled}.

---

### DataDatabricksLakewatchRuleStatus <a name="DataDatabricksLakewatchRuleStatus" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatus.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatus()
```


### DataDatabricksLakewatchRuleTimerange <a name="DataDatabricksLakewatchRuleTimerange" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerange.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerange(
  extend_lookback: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerange.property.extendLookback">extend_lookback</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#extend_lookback DataDatabricksLakewatchRule#extend_lookback}. |

---

##### `extend_lookback`<sup>Optional</sup> <a name="extend_lookback" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerange.property.extendLookback"></a>

```python
extend_lookback: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#extend_lookback DataDatabricksLakewatchRule#extend_lookback}.

---

### DataDatabricksLakewatchRuleUpdatedBy <a name="DataDatabricksLakewatchRuleUpdatedBy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy(
  display_name: str = None,
  email: str = None,
  id: str = None,
  principal_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#display_name DataDatabricksLakewatchRule#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#email DataDatabricksLakewatchRule#email}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#id DataDatabricksLakewatchRule#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#principal_type DataDatabricksLakewatchRule#principal_type}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#display_name DataDatabricksLakewatchRule#display_name}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#email DataDatabricksLakewatchRule#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#id DataDatabricksLakewatchRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal_type`<sup>Optional</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#principal_type DataDatabricksLakewatchRule#principal_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchRuleBatchCustomOutputReference <a name="DataDatabricksLakewatchRuleBatchCustomOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.resetOptions">reset_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_options` <a name="reset_options" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.notebookInput">notebook_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.notebook">notebook</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom">DataDatabricksLakewatchRuleBatchCustom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notebook_input`<sup>Optional</sup> <a name="notebook_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.notebookInput"></a>

```python
notebook_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.notebook"></a>

```python
notebook: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchRuleBatchCustom
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom">DataDatabricksLakewatchRuleBatchCustom</a>

---


### DataDatabricksLakewatchRuleBatchOutputReference <a name="DataDatabricksLakewatchRuleBatchOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.putCustom">put_custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.putSql">put_sql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.resetCustom">reset_custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.resetSql">reset_sql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.resetWarehouseId">reset_warehouse_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom` <a name="put_custom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.putCustom"></a>

```python
def put_custom(
  notebook: str,
  options: typing.Mapping[str] = None
) -> None
```

###### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.putCustom.parameter.notebook"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#notebook DataDatabricksLakewatchRule#notebook}.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.putCustom.parameter.options"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#options DataDatabricksLakewatchRule#options}.

---

##### `put_sql` <a name="put_sql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.putSql"></a>

```python
def put_sql(
  query: str,
  default_catalog_name: str = None,
  default_schema_name: str = None
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.putSql.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#query DataDatabricksLakewatchRule#query}.

---

###### `default_catalog_name`<sup>Optional</sup> <a name="default_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.putSql.parameter.defaultCatalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#default_catalog_name DataDatabricksLakewatchRule#default_catalog_name}.

---

###### `default_schema_name`<sup>Optional</sup> <a name="default_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.putSql.parameter.defaultSchemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/lakewatch_rule#default_schema_name DataDatabricksLakewatchRule#default_schema_name}.

---

##### `reset_custom` <a name="reset_custom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.resetCustom"></a>

```python
def reset_custom() -> None
```

##### `reset_sql` <a name="reset_sql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.resetSql"></a>

```python
def reset_sql() -> None
```

##### `reset_warehouse_id` <a name="reset_warehouse_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.resetWarehouseId"></a>

```python
def reset_warehouse_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference">DataDatabricksLakewatchRuleBatchCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.sql">sql</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference">DataDatabricksLakewatchRuleBatchSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.customInput">custom_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom">DataDatabricksLakewatchRuleBatchCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.sqlInput">sql_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql">DataDatabricksLakewatchRuleBatchSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.warehouseIdInput">warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch">DataDatabricksLakewatchRuleBatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.custom"></a>

```python
custom: DataDatabricksLakewatchRuleBatchCustomOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustomOutputReference">DataDatabricksLakewatchRuleBatchCustomOutputReference</a>

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.sql"></a>

```python
sql: DataDatabricksLakewatchRuleBatchSqlOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference">DataDatabricksLakewatchRuleBatchSqlOutputReference</a>

---

##### `custom_input`<sup>Optional</sup> <a name="custom_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.customInput"></a>

```python
custom_input: IResolvable | DataDatabricksLakewatchRuleBatchCustom
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchCustom">DataDatabricksLakewatchRuleBatchCustom</a>

---

##### `sql_input`<sup>Optional</sup> <a name="sql_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.sqlInput"></a>

```python
sql_input: IResolvable | DataDatabricksLakewatchRuleBatchSql
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql">DataDatabricksLakewatchRuleBatchSql</a>

---

##### `warehouse_id_input`<sup>Optional</sup> <a name="warehouse_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.warehouseIdInput"></a>

```python
warehouse_id_input: str
```

- *Type:* str

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRuleBatch
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatch">DataDatabricksLakewatchRuleBatch</a>

---


### DataDatabricksLakewatchRuleBatchSqlOutputReference <a name="DataDatabricksLakewatchRuleBatchSqlOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.resetDefaultCatalogName">reset_default_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.resetDefaultSchemaName">reset_default_schema_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_catalog_name` <a name="reset_default_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.resetDefaultCatalogName"></a>

```python
def reset_default_catalog_name() -> None
```

##### `reset_default_schema_name` <a name="reset_default_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.resetDefaultSchemaName"></a>

```python
def reset_default_schema_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.defaultCatalogNameInput">default_catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.defaultSchemaNameInput">default_schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.defaultCatalogName">default_catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.defaultSchemaName">default_schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql">DataDatabricksLakewatchRuleBatchSql</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_catalog_name_input`<sup>Optional</sup> <a name="default_catalog_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.defaultCatalogNameInput"></a>

```python
default_catalog_name_input: str
```

- *Type:* str

---

##### `default_schema_name_input`<sup>Optional</sup> <a name="default_schema_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.defaultSchemaNameInput"></a>

```python
default_schema_name_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `default_catalog_name`<sup>Required</sup> <a name="default_catalog_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.defaultCatalogName"></a>

```python
default_catalog_name: str
```

- *Type:* str

---

##### `default_schema_name`<sup>Required</sup> <a name="default_schema_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.defaultSchemaName"></a>

```python
default_schema_name: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSqlOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchRuleBatchSql
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleBatchSql">DataDatabricksLakewatchRuleBatchSql</a>

---


### DataDatabricksLakewatchRuleCreatedByOutputReference <a name="DataDatabricksLakewatchRuleCreatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy">DataDatabricksLakewatchRuleCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRuleCreatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleCreatedBy">DataDatabricksLakewatchRuleCreatedBy</a>

---


### DataDatabricksLakewatchRuleMitreList <a name="DataDatabricksLakewatchRuleMitreList" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksLakewatchRuleMitreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre">DataDatabricksLakewatchRuleMitre</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksLakewatchRuleMitre]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre">DataDatabricksLakewatchRuleMitre</a>]

---


### DataDatabricksLakewatchRuleMitreOutputReference <a name="DataDatabricksLakewatchRuleMitreOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetSubTechnique">reset_sub_technique</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetSubTechniqueId">reset_sub_technique_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetTactic">reset_tactic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetTaxonomy">reset_taxonomy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetTechnique">reset_technique</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetTechniqueId">reset_technique_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sub_technique` <a name="reset_sub_technique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetSubTechnique"></a>

```python
def reset_sub_technique() -> None
```

##### `reset_sub_technique_id` <a name="reset_sub_technique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetSubTechniqueId"></a>

```python
def reset_sub_technique_id() -> None
```

##### `reset_tactic` <a name="reset_tactic" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetTactic"></a>

```python
def reset_tactic() -> None
```

##### `reset_taxonomy` <a name="reset_taxonomy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetTaxonomy"></a>

```python
def reset_taxonomy() -> None
```

##### `reset_technique` <a name="reset_technique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetTechnique"></a>

```python
def reset_technique() -> None
```

##### `reset_technique_id` <a name="reset_technique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.resetTechniqueId"></a>

```python
def reset_technique_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.subTechniqueIdInput">sub_technique_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.subTechniqueInput">sub_technique_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.tacticInput">tactic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.taxonomyInput">taxonomy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.techniqueIdInput">technique_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.techniqueInput">technique_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.subTechnique">sub_technique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.subTechniqueId">sub_technique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.tactic">tactic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.taxonomy">taxonomy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.technique">technique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.techniqueId">technique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre">DataDatabricksLakewatchRuleMitre</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sub_technique_id_input`<sup>Optional</sup> <a name="sub_technique_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.subTechniqueIdInput"></a>

```python
sub_technique_id_input: str
```

- *Type:* str

---

##### `sub_technique_input`<sup>Optional</sup> <a name="sub_technique_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.subTechniqueInput"></a>

```python
sub_technique_input: str
```

- *Type:* str

---

##### `tactic_input`<sup>Optional</sup> <a name="tactic_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.tacticInput"></a>

```python
tactic_input: str
```

- *Type:* str

---

##### `taxonomy_input`<sup>Optional</sup> <a name="taxonomy_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.taxonomyInput"></a>

```python
taxonomy_input: str
```

- *Type:* str

---

##### `technique_id_input`<sup>Optional</sup> <a name="technique_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.techniqueIdInput"></a>

```python
technique_id_input: str
```

- *Type:* str

---

##### `technique_input`<sup>Optional</sup> <a name="technique_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.techniqueInput"></a>

```python
technique_input: str
```

- *Type:* str

---

##### `sub_technique`<sup>Required</sup> <a name="sub_technique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.subTechnique"></a>

```python
sub_technique: str
```

- *Type:* str

---

##### `sub_technique_id`<sup>Required</sup> <a name="sub_technique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.subTechniqueId"></a>

```python
sub_technique_id: str
```

- *Type:* str

---

##### `tactic`<sup>Required</sup> <a name="tactic" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.tactic"></a>

```python
tactic: str
```

- *Type:* str

---

##### `taxonomy`<sup>Required</sup> <a name="taxonomy" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.taxonomy"></a>

```python
taxonomy: str
```

- *Type:* str

---

##### `technique`<sup>Required</sup> <a name="technique" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.technique"></a>

```python
technique: str
```

- *Type:* str

---

##### `technique_id`<sup>Required</sup> <a name="technique_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.techniqueId"></a>

```python
technique_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitreOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRuleMitre
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleMitre">DataDatabricksLakewatchRuleMitre</a>

---


### DataDatabricksLakewatchRuleOriginalContentPackOutputReference <a name="DataDatabricksLakewatchRuleOriginalContentPackOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPack">DataDatabricksLakewatchRuleOriginalContentPack</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPackOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRuleOriginalContentPack
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOriginalContentPack">DataDatabricksLakewatchRuleOriginalContentPack</a>

---


### DataDatabricksLakewatchRuleOutputOutputReference <a name="DataDatabricksLakewatchRuleOutputOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resetContext">reset_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resetDefaultContext">reset_default_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resetEventTimeColumn">reset_event_time_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resetSummary">reset_summary</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_context` <a name="reset_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resetContext"></a>

```python
def reset_context() -> None
```

##### `reset_default_context` <a name="reset_default_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resetDefaultContext"></a>

```python
def reset_default_context() -> None
```

##### `reset_event_time_column` <a name="reset_event_time_column" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resetEventTimeColumn"></a>

```python
def reset_event_time_column() -> None
```

##### `reset_summary` <a name="reset_summary" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.resetSummary"></a>

```python
def reset_summary() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.contextInput">context_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.defaultContextInput">default_context_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.eventTimeColumnInput">event_time_column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.summaryInput">summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.context">context</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.defaultContext">default_context</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.eventTimeColumn">event_time_column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput">DataDatabricksLakewatchRuleOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `context_input`<sup>Optional</sup> <a name="context_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.contextInput"></a>

```python
context_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_context_input`<sup>Optional</sup> <a name="default_context_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.defaultContextInput"></a>

```python
default_context_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_time_column_input`<sup>Optional</sup> <a name="event_time_column_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.eventTimeColumnInput"></a>

```python
event_time_column_input: str
```

- *Type:* str

---

##### `summary_input`<sup>Optional</sup> <a name="summary_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.summaryInput"></a>

```python
summary_input: str
```

- *Type:* str

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.context"></a>

```python
context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_context`<sup>Required</sup> <a name="default_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.defaultContext"></a>

```python
default_context: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `event_time_column`<sup>Required</sup> <a name="event_time_column" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.eventTimeColumn"></a>

```python
event_time_column: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRuleOutput
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOutput">DataDatabricksLakewatchRuleOutput</a>

---


### DataDatabricksLakewatchRuleOwnerOutputReference <a name="DataDatabricksLakewatchRuleOwnerOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner">DataDatabricksLakewatchRuleOwner</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwnerOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRuleOwner
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleOwner">DataDatabricksLakewatchRuleOwner</a>

---


### DataDatabricksLakewatchRuleProviderConfigOutputReference <a name="DataDatabricksLakewatchRuleProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig">DataDatabricksLakewatchRuleProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksLakewatchRuleProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleProviderConfig">DataDatabricksLakewatchRuleProviderConfig</a>

---


### DataDatabricksLakewatchRuleScheduleOutputReference <a name="DataDatabricksLakewatchRuleScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resetAtLeastEvery">reset_at_least_every</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resetContinuous">reset_continuous</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resetCronExpression">reset_cron_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_at_least_every` <a name="reset_at_least_every" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resetAtLeastEvery"></a>

```python
def reset_at_least_every() -> None
```

##### `reset_continuous` <a name="reset_continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resetContinuous"></a>

```python
def reset_continuous() -> None
```

##### `reset_cron_expression` <a name="reset_cron_expression" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resetCronExpression"></a>

```python
def reset_cron_expression() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.atLeastEveryInput">at_least_every_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.continuousInput">continuous_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.cronExpressionInput">cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.atLeastEvery">at_least_every</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.continuous">continuous</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule">DataDatabricksLakewatchRuleSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `at_least_every_input`<sup>Optional</sup> <a name="at_least_every_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.atLeastEveryInput"></a>

```python
at_least_every_input: str
```

- *Type:* str

---

##### `continuous_input`<sup>Optional</sup> <a name="continuous_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.continuousInput"></a>

```python
continuous_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cron_expression_input`<sup>Optional</sup> <a name="cron_expression_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.cronExpressionInput"></a>

```python
cron_expression_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `at_least_every`<sup>Required</sup> <a name="at_least_every" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.atLeastEvery"></a>

```python
at_least_every: str
```

- *Type:* str

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.continuous"></a>

```python
continuous: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRuleSchedule
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleSchedule">DataDatabricksLakewatchRuleSchedule</a>

---


### DataDatabricksLakewatchRuleStatusOutputReference <a name="DataDatabricksLakewatchRuleStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lastCompleteTime">last_complete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lastErrorMessage">last_error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lastStartTime">last_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lastStatusChangeTime">last_status_change_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.runState">run_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatus">DataDatabricksLakewatchRuleStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `last_complete_time`<sup>Required</sup> <a name="last_complete_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lastCompleteTime"></a>

```python
last_complete_time: str
```

- *Type:* str

---

##### `last_error_message`<sup>Required</sup> <a name="last_error_message" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lastErrorMessage"></a>

```python
last_error_message: str
```

- *Type:* str

---

##### `last_start_time`<sup>Required</sup> <a name="last_start_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lastStartTime"></a>

```python
last_start_time: str
```

- *Type:* str

---

##### `last_status_change_time`<sup>Required</sup> <a name="last_status_change_time" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lastStatusChangeTime"></a>

```python
last_status_change_time: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `run_state`<sup>Required</sup> <a name="run_state" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.runState"></a>

```python
run_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRuleStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleStatus">DataDatabricksLakewatchRuleStatus</a>

---


### DataDatabricksLakewatchRuleTimerangeOutputReference <a name="DataDatabricksLakewatchRuleTimerangeOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.resetExtendLookback">reset_extend_lookback</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_extend_lookback` <a name="reset_extend_lookback" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.resetExtendLookback"></a>

```python
def reset_extend_lookback() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.extendLookbackInput">extend_lookback_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.extendLookback">extend_lookback</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerange">DataDatabricksLakewatchRuleTimerange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extend_lookback_input`<sup>Optional</sup> <a name="extend_lookback_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.extendLookbackInput"></a>

```python
extend_lookback_input: str
```

- *Type:* str

---

##### `extend_lookback`<sup>Required</sup> <a name="extend_lookback" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.extendLookback"></a>

```python
extend_lookback: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerangeOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRuleTimerange
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleTimerange">DataDatabricksLakewatchRuleTimerange</a>

---


### DataDatabricksLakewatchRuleUpdatedByOutputReference <a name="DataDatabricksLakewatchRuleUpdatedByOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_lakewatch_rule

dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resetPrincipalType">reset_principal_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_principal_type` <a name="reset_principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.resetPrincipalType"></a>

```python
def reset_principal_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy">DataDatabricksLakewatchRuleUpdatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksLakewatchRuleUpdatedBy
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchRule.DataDatabricksLakewatchRuleUpdatedBy">DataDatabricksLakewatchRuleUpdatedBy</a>

---



